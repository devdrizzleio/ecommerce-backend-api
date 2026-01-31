import express from "express";

import { createProductController, getProductController, listProductsController } from "../controllers/product.controller.js";

import sessionGuard from "../middlewares/session.middleware.js";

import roleGuard from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/", sessionGuard, roleGuard, createProductController);

router.get("/", listProductsController);

router.get("/:id", getProductController);

export default router;