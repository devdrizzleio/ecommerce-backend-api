import express from "express";

import { iniatePaymentController, confirmPaymentController, failPaymentController } from "../controllers/payment.controller.js";

import sessionGuard from "../middlewares/session.middleware.js";

const router = express.Router();

router.post("/", sessionGuard, iniatePaymentController);

router.post("/:orderId/success", confirmPaymentController);

router.post("/:orderId/fail", confirmPaymentController);

export default router;