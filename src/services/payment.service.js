import { createPayment, updatePaymentStatus } from "../repositories/payment.repository.js";

const initiatePayment = async (orderId, amount) => {
    return({
        orderId, 
        amount,
        status : "Pending",
    });
};

const confirmPayment = async (orderId) => {
    return updatePaymentStatus(orderId, "Success");
};

const failPayment = async (orderId) => {
    return updatePaymentStatus(orderId, "Failed");
};

export { initiatePayment, confirmPayment, failPayment };