import express from "express";

import { addToCartController, removeFromCartController } from "../controllers/cart.controller.js";

import sessionGuard from "../middlewares/session.middleware.js";

const router = express.Router();

router.post("/", sessionGuard, addToCartController);

router.delete("/:productId", sessionGuard, removeFromCartController);

export default router;