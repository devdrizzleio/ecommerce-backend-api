import { addItemToCart, removeItemFromCart } from "../services/cart.service.js";

const addToCartController = async (req, res, next) => {
    try {
        const { productId, quantity } = req.body;
        const cart = await addItemToCart(req.user.id, productId, quantity);
        res.json(cart);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

const removeFromCartController = async (req, res, next) => {
    try {
        const cart = await removeItemFromCart(
            req.user.id,
            req.params.productId,
        );
        res.json(cart);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

export { addToCartController, removeFromCartController };