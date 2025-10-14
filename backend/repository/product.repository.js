import productModel from "../model/Product.js";
import mongoose from "mongoose";
export const getAllProducts = async (limit, page, searchVal, price, categoryId) => {
  const skip = (page - 1) * limit;
  const filter = {
    $or: [
      {title: { $regex: searchVal, $options: "i" }},
      {description: { $regex: searchVal, $options: "i" },}
    ]
  }
  if(price !== undefined && !isNaN(price)) {
    filter.price = { $lte: Number(price)};
  }
  if (categoryId) {
    filter.category = new mongoose.Types.ObjectId(categoryId);
  }
  console.log(filter);
  return await productModel
    .find(filter)
    .skip(skip)
    .limit(limit);
};

export const getProductById = async (id) => {
  return await productModel.findById(id);
};

export const saveProduct = async (product) => {
  return await productModel.create(product);
};

export const deleteProductById = async (id) => {
  return await productModel.findByIdAndDelete(id);
}

export const updateProductById = (id, updateData) => {
  return Product.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
};