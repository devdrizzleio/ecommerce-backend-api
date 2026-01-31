import { createProduct, findProductById, findAllActiveProducts } from "../repositories/product.repositories.js";

import { createInventory } from "../repositories/inventory.repository.js";

const addProduct = async (data) => {
    try {
        const product = await createProduct(data);

        await createInventory({
            productId : product._id,
            stock : data.stock || 0,
        });

        return product;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getProductById = async (productId) => {
    return findProductById(productId);
};

const listActiveProducts = async () => {
    return findAllActiveProducts();
};

export { addProduct, getProductById, listActiveProducts };