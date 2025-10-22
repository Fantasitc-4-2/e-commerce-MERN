import React, { useEffect } from "react";
import WishedProductsRow from "../compoents/ProductsRow";
import { useDispatch, useSelector } from "react-redux";
import { getWishList } from "../slices/wishListSlice";

import LoadingSpinner from "../compoents/LoadingSpinner";
import RelatedProductsRow from "../compoents/product/RelatedProductsRow";
import ProductsRow from "../compoents/ProductsRow";

const WishList = () => {
  const dispatch = useDispatch();
  const { wishlist, loading } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getWishList());
  }, [dispatch]);
  if (loading) {
    return <LoadingSpinner />;
  }
  console.log(wishlist);
  return (
    <div className="flex flex-col mt-20 ">
      {wishlist?.length === 0 ? (
        <p className="text-center text-2xl font-medium">
          Your wishlist is empty.
        </p>
      ) : (
        <ProductsRow products={wishlist} />
      )}

      {/* <RelatedProductsRow products={wishlist} /> */}
    </div>
  );
};

export default WishList;
