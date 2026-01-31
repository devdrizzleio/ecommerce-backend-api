import { findCartByUserId, updateCartItems } from "../repositories/cart.repository.js";

const addItemToCart = async (userId, productId, quantity) => {
    const cart = await findCartByUserId(userId) || { items : [] };

    const existingItem = cart.items.find(
        item => item.productId.toString() === productId
    );

    if(existingItem){
        existingItem.quantity += quantity;
    } else {
        cart.items.push({ productId, quantity });
    };

    return updateCartItems(userId, cart.items);
};

const removeItemFromCart = async (userId, productId) => {
    const cart = await findCartByUserId(userId);

    if(!cart) return null;

    const updatedItems = cart.items.filter(
       item => item.productId.toString() !== productId 
    );

    return updateCartItems(userId, updatedItems);
};

export { addItemToCart, removeItemFromCart };