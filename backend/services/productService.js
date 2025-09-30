import * as productRepository from "../repository/product.repository.js";

export const getAllProducts = async (limit, page, searchVal) => {
  return await productRepository.getAllProducts(limit, page, searchVal);
};

export const getProductById = async (id) => {
  return await productRepository.getProductById(id);
};

export const createProduct = async (product) => {
  return await productRepository.saveProduct(product);
};
