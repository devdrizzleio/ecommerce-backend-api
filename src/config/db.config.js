import mongoose from "mongoose";
import envConfig from "./env.config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(envConfig.mongoUri);
        console.log(`Database connected succesfully`);
    } catch (error) {
        console.error(`Database connection failed ${error}`);
        throw error;
    };
};

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log(`Database disconnected`)
    } catch (error) {
        console.error(`Database discnnection failed ${error}`);
    };
};

export { connectDB , disconnectDB };