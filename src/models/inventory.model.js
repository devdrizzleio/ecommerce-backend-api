import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
    {
        producctId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Product",
            required : true,
            unique : true,
        },
        quantityAvailable : {
            type : Number,
            required : true
        },
        quantityReserved : {
            type : Number,
            default : 0,
        },
    },
    { timestamps : true },
);

const Inventory = mongoose.model("Inventory", inventorySchema);