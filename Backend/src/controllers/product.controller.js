
import { Product } from "../models/index.js";

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock, images } = req.body;

        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            images,
        });

        await product.save();
        res.status(201).send({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(500).send({ error: 'Server error.' });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: 'Server error.' });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send({ error: 'Product not found.' });
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: 'Server error.' });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!product) return res.status(404).send({ error: 'Product not found.' });
        res.status(200).send({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(500).send({ error: 'Server error.' });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).send({ error: 'Product not found.' });
        res.status(200).send({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Server error.' });
    }
};
