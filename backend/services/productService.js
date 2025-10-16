import * as productRepository from "../repository/product.repository.js";
import * as categoryRepository from "../repository/category.repository.js";
import * as reviewRepository from "../repository/review.repository.js";
export const getAllProducts = async (limit, page, searchVal, price,category) => {
  return await productRepository.getAllProducts(limit, page, searchVal, price, category);
};

export const getProductById = async (id) => {
  const reviews = await reviewRepository.getReviewsByProductId(id);
  const product = await productRepository.getProductById(id);
  if(!product) {
    return null;
  }
  return {...product.toObject(), reviews: reviews}
};

export const createProduct = async (product) => {
  if(product.discountPrice) {
    product.discountRate = (
      ((product.price - product.discountPrice) / product.price) * 100
    ).toFixed(2);
  }
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

