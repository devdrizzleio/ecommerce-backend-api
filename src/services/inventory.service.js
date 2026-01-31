import { findInventoryByProductId, updateInventory } from "../repositories/inventory.repository.js";

const reduceStock = async (productId, quantity) => {
    const inventory = await findInventoryByProductId(productId);

    if(!inventory || inventory.stock < quantity) {
        throw new Error(`Insufficient stock`);
    };

    inventory.stock -= quantity;
    return updateInventory(productId, { stock : inventory.stock });
};

const increaseStock = async (productId, quantity) => {
    const inventory = await findInventoryByProductId(productId);

    if(!inventory){
        throw new Error(`Inventory not found`)
    };

    inventory.stock += quantity;
    return updateInventory(productId, { stock : inventory.stock });
};

export { reduceStock, increaseStock };