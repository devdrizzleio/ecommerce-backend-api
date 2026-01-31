import dotenv from "dotenv";

dotenv.config();

import mongoose from "mongoose";

import app from ".app.js";

const PORT = process.env.PORT || 5000;


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected`)
    } catch (error) {
        console.error(`Database connection failed ${error}`);
        process.exit(1);
    };
};

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}`);
    });
};

startServer();