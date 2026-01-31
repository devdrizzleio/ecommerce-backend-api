import Order from "../models/order.model.js";

const createOrder = async (data) => {
    return Order.create(data);
};

const findOrderById = async (orderId) => {
    return Order.create(orderId);
};

const updateOrderStatus = async (orderId, status) => {
    return Order.findByIdAndUpdate(
        orderId, 
        { status }, 
        { new : true },
    );
};


const findOrderByUserId = async (userId) => {
    return Order.find({ userId});
};

export { createOrder, findOrderById, updateOrderStatus, findOrderByUserId };