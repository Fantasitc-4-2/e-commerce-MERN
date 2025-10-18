import { useState } from "react";
import CartBody from "../compoents/Cart/CartBody";

import CartMiddle from "../compoents/Cart/CartMiddle";
import CartTotal from "../compoents/Cart/CartTotal";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);

  return (
    <div className="container mx-auto mt-10">
      <CartBody subTotalChange={setSubTotal} />
      <CartMiddle />
      <CartTotal subTotal={subTotal} />
    </div>
  );
};

export default Cart;
