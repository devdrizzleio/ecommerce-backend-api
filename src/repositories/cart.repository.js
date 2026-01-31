import Cart from "../models/cart.model.js";

const findCartByUserId = async (userId) => {
    return Cart.findOne({ userId });
};

const createCart = async (userId) => {
    return Cart.create({ userId, items : [] });
};

const updateCartItems = async (userId, items) => {
    return Cart.findOneAndUpdate(
        { userId }, 
        { items }, 
        { new : true, upsert : true },
    );
};

const clearCart = async (userId) => {
    return Cart.findOneAndUpdate(
        { userId }, 
        { items : [] }, 
        { new : true },
    );
};

export { findCartByUserId, createCart, updateCartItems, clearCart };