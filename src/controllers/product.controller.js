import { addProduct, getProductById, listActiveProducts } from "../services/product.service.js";

const createProductController = async (req, res, next) => {
    try {
        const product = await addProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        console.log(error)
        next(error)
    };
};

const getProductController = async (req, res, next) => {
    try {
        const product = await getProductById(req.params.id);

        if(!product){
            return res.status(404).json({ message : `Product not found` });
        };

        res.json(product);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

const listProductsController = async (req, res, next) => {
    try {
        const products = await listActiveProducts();
        res.json(products);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

export { createProductController, getProductController, listProductsController };