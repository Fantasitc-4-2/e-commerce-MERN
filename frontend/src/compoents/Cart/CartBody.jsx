import { useEffect } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteItemCart, getCart, updateCart } from "../../slices/cartSlice";

const CartBody = ({ subTotalChange }) => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    const subTotalValue = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    subTotalChange(subTotalValue);
  }, [items, subTotalChange]);

  const handleChange = async (id, q) => {
    try {
      await dispatch(updateCart({ id, quantity: q })).unwrap();
      toast.success("Cart Updated");
    } catch {
      toast.error("Failed to update cart");
    }
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteItemCart({ id })).unwrap();
      toast.success("Item deleted");
    } catch {
      toast.error("Failed to delete item");
    }
  };

  if (items.length === 0)
    return (
      <div className="w-full text-gray-600 mx-auto my-24 text-center">
        <p className="text-4xl md:text-6xl font-semibold">Your Cart is Empty</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-4 px-4 md:px-6 lg:px-0">
      <div className="hidden md:grid grid-cols-4 bg-gray-50 rounded-xl shadow-sm px-8 py-3 w-[85%] lg:w-[70%] mx-auto font-semibold text-gray-700 border border-gray-100">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {items.map((item) => (
        <CartItem
          handleChange={handleChange}
          quantity={item.quantity}
          handleDelete={handleDelete}
          key={item._id}
          _id={item._id}
          productId={item.productId}
          title={item.productId?.title}
          price={item.productId?.price}
          image={item.productId?.image}
        />
      ))}
    </div>
  );
};

export default CartBody;
