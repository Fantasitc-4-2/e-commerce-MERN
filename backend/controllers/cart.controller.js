import { cartModel } from "../model/cart.js";
import Product from "../model/Product.js";

function calcPrice(cart) {
  let allPrice = 0;

  cart.items.forEach((element) => {
    allPrice += element.quantity * element.price;
  });

  cart.totalPrice = allPrice;
}
export const addToCart = async (req, res) => {
    
    let product = await Product.findById(req.body.productId);
    !product && next(new AppError(`Product not found`, 404));
    
    let isCartExist = await cartModel.findOne({ userId: req.user.id });
    req.body.price = product.price;
  if (!isCartExist) {
    let result = new cartModel({
      userId: req.user.id,
      items: [req.body],
    });
    calcPrice(result);
    await result.save();
    return res.status(200).json({ message: "success", result });
  }
  let item = isCartExist.items.find(
    (e) => e.productId.toString() === req.body.productId.toString()
  );
  if (item) {
    item.quantity += 1;
  } else {
    isCartExist.items.push(req.body);
  }
  calcPrice(isCartExist);
  await isCartExist.save();
  res.status(200).json({ message: "success", cart: isCartExist });
};

export const removeFromCart = async (req, res) => {
  let result = await cartModel.findOneAndUpdate(
    { userId: req.user.id },
    { $pull: { items: { _id: req.params.id } } },
    { new: true }
  );

  !result && next(new AppError(`item not found`, 404));
  result && res.status(200).json({ message: "success", result });
};
export const updateQuantity = async (req, res) => {
  let product = await Product.findById(req.params.id);
  !product && next(new AppError(`Product not found`, 404));

  let isCartExist = await cartModel.findOne({ userId: req.user.id });

  let item = isCartExist.items.find(
    (e) => e.productId.toString() === req.params.id.toString()
  );

  if (item) {
    item.quantity = req.body.quantity;
  }

  calcPrice(isCartExist);

  await isCartExist.save();
  res.status(200).json({ message: "success", cart: isCartExist });
};
