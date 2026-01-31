import express from "express";

import session from "express-session";

import MongoStore from "connect-mongo";

import productRoutes from "./routes/product.routes.js";
import carRoutes from "./routes/cart.routes.js";
import orderRoutes from "./routes/order.routes.js";
import paymentRoutes from "./routes/payment.routes.js";

import notFoundMiddleware from "./middlewares/notFound.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

/* ------------------ Core Middlewares ------------------ */

app.use(express,json());
app.use(express.urlencoded({ extended : true }));

/* ------------------ Session Configuration ------------------ */

app.use(
    session({
        name : "ecommerce.sid",
        secret : process.env.SESSION.SECRET,
        resave : false,
        saveUninitialized : false,
        store : MongoStore.create({
            mongoUrl : process.env.MONGO_URI
        }),
        cookie : {
            httpOnly : true,
            secure : false,  // true in production with HTTPS
            maxAge : 1000 * 60 * 60 * 24,
        },
    }),
);

/* ------------------ Routes ------------------ */

app.use("/api/products", productRoutes);
app.use("/api/cart", carRoutes);
app.use("api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);

/* ------------------ Global Handlers ------------------ */

app.use(notFoundMiddleware);
app.use(errorMiddleware)

export default app;