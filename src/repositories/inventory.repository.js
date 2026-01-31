import Inventory from "../models/inventory.model.js";

const createInventory = async (data) => {
    return Inventory.create(data);
};

const findInventoryByProductId = async (productId) => {
    return Inventory.findOne({ productId });
};

const updateInventory = async (productId, updates) => {
    return Inventory.findOneAndUpdate(
        { productId }, 
        updates, 
        { new : true },
    );
};

export { createInventory, findInventoryByProductId, updateInventory };