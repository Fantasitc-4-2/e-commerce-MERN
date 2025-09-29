const productRepository = require("../repository/product.repository");

const getAllProducts = async (limit, page, searchVal) => {
    return await productRepository.getAllProducts(limit, page, searchVal);
}

const getProductById = async (id) => {
    return await productRepository.getProductById(id);
}

const createProduct = async (product) => {
    return await productRepository.saveProduct(product);
}
module.exports = {
    getAllProducts,
    getProductById,
    createProduct
}