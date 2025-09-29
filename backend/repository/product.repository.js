const productModel = require("../model/Product");

const getAllProducts = async (limit, page, searchVal) => {
    const skip = (page - 1) * limit;
    return await productModel.find({
        title: {$regex: searchVal, $options: "i"},
        description: {$regex: searchVal, $options: "i"},
    })
        .skip(skip)
        .limit(limit);
}

const getProductById = async (id) => {
    return await productModel.findById(id);
}

const saveProduct = async (product) => {
    return await productModel.create(product);
}

module.exports = {
    getAllProducts,
    getProductById,
    saveProduct
}