import { placeOrder } from "../services/order.service.js";
import { findCartByUserId } from "../repositories/cart.repository.js";

const placeOrderController = async (req, res, next) => {
    try {
        const cart = await findCartByUserId(req.user.id);

        if(!cart || !cart.items.length) {
            return res.status(400).json({ message : `Cart is empty` })
        };

        const order = await placeOrder(req.user.id, cart.items);
        res.status(201).json(order); 
    } catch (error) {
        console.log(error);
        next(error);
    };
};

export { placeOrderController };