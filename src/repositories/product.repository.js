import Product from "../models/product.model.js";

const createProduct = async (data) => {
    return Product.create(data);
};


const findProductById = async (productId) => {
    return Product.findById(productId);
};

const findAllActiveProducts = async () => {
    return Product.find({ isActive : true });
};

const updateProductById = async (productId, updates) => {
    return Product.findByIdAndUpdate(productId, updates, { new : true });
};


export { createProduct, findProductById, findAllActiveProducts, updateProductById };


