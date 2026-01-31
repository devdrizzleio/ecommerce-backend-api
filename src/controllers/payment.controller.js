import { initiatePayment, confirmPayment, failPayment } from "../services/payment.service.js";

const iniatePaymentController = async (req, res, next) => {
    try {
        const { orderId, amount } = req.body;
        const payment = await initiatePayment(orderId, amount);
        res.status(201).json(payment);
    } catch (error) {
        console.log(error);
        next(error);
    };
};


const confirmPaymentController = async (req, res, next) => {
    try {
        const payment = await confirmPayment(req.params.orderId);
        res.json(payment)
    } catch (error) {
        console.log(error);
        next(error);
    };
};

const failPaymentController = async (req, res, next) => {
    try {
        const payment = await failPayment(req.params.orderId);
        res.json(payment);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

export { iniatePaymentController, confirmPaymentController, failPaymentController };