import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userId : {
            type : mongoose.Schema.Type.ObjectId,
            ref : "User",
            required : true,
        },
        items : [
            {
                productId : mongoose.Schema.Types.ObjectId,
                productName : String,
                priceAtPurchase : Number,
                quantity : Number,
            },    
        ],
        totalAmount : {
            type : Number,
            required : true,
        },
        status : {
            type : String,
            enum : [ "pendimg", "paid", "failed" ],
            default : "pending",
        },
    },
    { timestamps : true },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;