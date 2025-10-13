import * as productRepository from "../repository/product.repository.js";

export const getAllProducts = async (limit, page, searchVal, price,category) => {
  
  return await productRepository.getAllProducts(limit, page, searchVal, price,category);
};

export const getProductById = async (id) => {
  return await productRepository.getProductById(id);
};

export const createProduct = async (product) => {
  return await productRepository.saveProduct(product);
};

export const deleteProductById = async (id) => {
  const res = await productRepository.deleteProductById(id);
  if (!res) {
    throw new Error("Product can not be found");
  }
  return res;
}

export const updateProductById = async (id, updateData) => {
  const updatedProduct = await productRepository.updateProductById(id, updateData);

  if (!updatedProduct) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }

  return updatedProduct;
};

