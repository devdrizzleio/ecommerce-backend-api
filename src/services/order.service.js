import { createOrder } from "../repositories/order.respository.js";
import { clearCart } from "../repositories/cart.repository.js";
import { reduceStock } from "../services/inventory.service.js";

const placeOrder = async (userId, cartItems) => {
    if(!cartItems.length) {
        throw new Error(`Cart is empty`);
    };

    for (const item of cartItems) {
        await reduceStock(item.productId, item.quantity);
    };

    const order = await createOrder({
        userId, 
        items : cartItems, 
        status : `Placed`,
    });

    await clearCart(userId);

    return order;
};

export { placeOrder };