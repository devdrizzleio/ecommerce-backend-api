import Payment from "../models/payment.model.js";

const createPayment = async (data) => {
    return Payment.create(data);
};

const findPaymentByOrderId = async (orderId) => {
    return Payment.findOne({ orderId });
};

const updatePaymentStatus = async (orderId, status) => {
    return Payment.findOneByUpdate(
        { orderId }, 
        { status }, 
        { new : true },
    );
};

export { createPayment, findPaymentByOrderId, updatePaymentStatus };