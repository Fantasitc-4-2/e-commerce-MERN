import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { cartModel } from "../model/cart.js";
import Order from "../model/order.js";
import Product from "../model/Product.js";
import { AppError } from "../utils/AppError.js";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCashOrder = catchAsyncError(async (req, res, next) => {
  console.log(req.body);

  let cart = await cartModel.findById(req.params.id);
  if (!cart) return next(new AppError(`cart not found`, 404));

  for (let item of cart.items) {
    const product = await Product.findById(item.productId);

    if (!product) {
      return next(
        new AppError(`Product with ID ${item.productId} not found`, 404)
      );
    }

    if (product.quantity < item.quantity) {
      return next(
        new AppError(
          `Not enough stock for product ${product.name}. Available: ${product.quantity}, Requested: ${item.quantity}`,
          400
        )
      );
    }
  }

  const totalOrderPrice = cart.totalPrice;

  let order = new Order({
    userId: req.user.id,
    totalOrderPrice,
    shipping: req.body.shipping,
    items: cart.items,
  });

  await order.save();

  if (order) {
    let options = cart.items.map((item) => ({
      updateOne: {
        filter: { _id: item.productId },
        update: { $inc: { quantity: -item.quantity, sold: item.quantity } },
      },
    }));

    await Product.bulkWrite(options);
    await cartModel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "success", order });
  } else {
    return next(new AppError(`item not found`, 404));
  }
});
export const getUserOrders = catchAsyncError(async (req, res, next) => {
  const order = await Order.find({ userId: req.user.id }).populate(
    "items.productId"
  );
  !order && next(new AppError(`order not found`, 404));
  order && res.status(200).json({ message: "success", order });
});
export const getOneOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate("items.productId");

  if (!order) {
    return next(new AppError(`order not found`, 404));
  }

  if (
    req.user.roles.includes("admin") ||
    req.user.id.toString() === order.userId.toString()
  ) {
    return res.status(200).json({ message: "success", order });
  }

  return next(new AppError(`You are not authorized to access this order`, 403));
});
export const getAllOrders = catchAsyncError(async (req, res, next) => {
  const order = await Order.find({}).populate("items.productId");
  !order && next(new AppError(`order not found`, 404));
  order && res.status(200).json({ message: "success", order });
});

export const createCheckoutSession = catchAsyncError(async (req, res, next) => {


  
  let cart = await cartModel.findById(req.params.id);
  if (!cart) return next(new AppError(`cart not found`, 404));

  const totalOrderPrice = cart.totalPrice;

  let session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "egp",
          unit_amount: totalOrderPrice * 100,
          product_data: {
            name: req.user.username,
          },
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:5173/",
    cancel_url: "http://localhost:5173/",
    customer_email: req.user.email,
    client_reference_id: req.params.id,
    metadata: req.body.shipping,
  });
  res.status(200).json({ message: "success", session })
});
