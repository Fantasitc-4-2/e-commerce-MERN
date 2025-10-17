import CartBody from "../compoents/Cart/CartBody";

import CartMiddle from "../compoents/Cart/CartMiddle";
import CartTotal from "../compoents/Cart/CartTotal";


const Cart = () => {
  return (
    <div className="container mx-auto mt-10">
      <CartBody />
      <CartMiddle />
      <CartTotal />
      
    </div>
  );
};

export default Cart;
