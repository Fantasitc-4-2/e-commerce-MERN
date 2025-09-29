import React from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();

  return <div>ProductDetails</div>;
};

export default ProductDetails;
