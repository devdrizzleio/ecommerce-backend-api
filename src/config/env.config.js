import dotenv from "dotenv";

dotenv.config();

const envConfig = {
    port : process.env.PORT,
    mongoUri : process.env.MONGO_URI,
    sessionSecret : process.env.SESSION_SECRET,
    sessionMaxAge : Number(process.env.SESSION_MAX_AGE),
    nodeEnv : process.env.NODE_ENV,
};

export default envConfig;