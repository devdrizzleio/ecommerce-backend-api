import express from "express";

import { placeOrderController } from "../controllers/order.controller.js";

import sessionGuard from "../middlewares/session.middleware.js";

const router = express.Router();

router.post("/", sessionGuard, placeOrderController);

export default router;