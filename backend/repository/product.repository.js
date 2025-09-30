import productModel from "../model/Product.js";

export const getAllProducts = async (limit, page, searchVal) => {
  const skip = (page - 1) * limit;
  return await productModel
    .find({
      title: { $regex: searchVal, $options: "i" },
      description: { $regex: searchVal, $options: "i" },
    })
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