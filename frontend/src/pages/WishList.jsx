import React, { useEffect, useState } from "react";
import WishedProductsRow from "../compoents/WishedProductsRow";

import axios from "axios";
import LoadingSpinner from "../compoents/LoadingSpinner";
import RelatedProductsRow from "../compoents/RelatedProductsRow";

const WishList = () => {
  const [wishedProducts, setWishedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/results`);

        setWishedProducts(res.data.slice(0, 4));
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="flex flex-col mt-20 ">
      <WishedProductsRow wished products={wishedProducts} />
      <RelatedProductsRow products={wishedProducts} />
    </div>
  );
};

export default WishList;
