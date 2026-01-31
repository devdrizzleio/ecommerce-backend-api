import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        orderId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Order",
            required : true,
        },
        status : {
            type : String,
            enum : [ "initiated", "success", "failed" ],
            default : "initiated",
        },
        provider : {
            type : String,
            default : "mock-gateway",
        },
    },
    { timestamps : true },
);

const Payment = mongoose.model("Payment", paymentSchema);

export default paymentSchema;