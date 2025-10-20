import { useEffect} from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteItemCart, getCart, updateCart } from "../../slices/cartSlice";
import LoadingSpinner from "../LoadingSpinner";

const CartBody = ({ subTotalChange }) => {
  const dispatch = useDispatch();
  let { items, loading } = useSelector((state) => state.cart);
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
    } catch (err) {
      toast.error(err || "Failed to update cart");
    }
  };
  const handleDelete = async (id) => {
    try {
      await dispatch(deleteItemCart({ id })).unwrap();
      toast.success("Item deleted");
    } catch (err) {
      toast.error(err || "Failed to delete item");
    }
  };
  if (loading) return <LoadingSpinner />;
  if (items.length === 0)
    return (
      <div className="w-full text-gray-600 mx-auto my-12 md:my-24 lg:my-36 px-4">
        <p className="text-4xl md:text-6xl lg:text-9xl text-center">
          Your Cart is empty :l
        </p>
      </div>
    );

  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 px-4 md:px-6 lg:px-0">
      {/* Header - Hidden on mobile, shown on tablet+ */}
      <div className="hidden md:grid grid-cols-4 bg-white rounded-lg shadow-sm px-4 md:px-6 lg:px-8 py-3 md:py-4 w-full md:w-[85%] lg:w-[70%] mx-auto font-medium text-sm md:text-base text-gray-700 mb-2 md:mb-4">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {items.map((item) => (
        <CartItem
          handleChange={handleChange}
          quantity = {item.quantity}
          handleDelete={handleDelete}
          key={item._id}
          productId={item.productId._id || item.productId}
          {...item}
        />
      ))}
    </div>
  );
};

export default CartBody;
