// controllers/cartController.js
import {Cart} from "../models/index.js";
import {Product} from "../models/index.js";

export const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            cart = new Cart({ user: req.user._id, products: [] });
        }

        const product = await Product.findById(productId);
        if (!product) return res.status(404).send({ error: 'Product not found.' });

        const cartProductIndex = cart.products.findIndex(p => p.product.toString() === productId);

        if (cartProductIndex > -1) {
            cart.products[cartProductIndex].quantity += quantity;
        } else {
            cart.products.push({ product: productId, quantity });
        }

        await cart.save();
        res.status(200).send({ message: 'Product added to cart', cart });
    } catch (error) {
        res.status(500).send({ error: 'Server error.' });
    }
};

export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id }).populate('products.product');
        if (!cart) return res.status(404).send({ error: 'Cart not found.' });
        res.status(200).send(cart);
    } catch (error) {
        res.status(500).send({ error: 'Server error.' });
    }
};

export const updateCartItem = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        let cart = await Cart.findOne({ user: req.user._id });
        if (!cart) return res.status(404).send({ error: 'Cart not found.' });

        const cartProductIndex = cart.products.findIndex(p => p.product.toString() === productId);

        if (cartProductIndex === -1) return res.status(404).send({ error: 'Product not found in cart.' });

        if (quantity > 0) {
            cart.products[cartProductIndex].quantity = quantity;
        } else {
            cart.products.splice(cartProductIndex, 1);
        }

        await cart.save();
        res.status(200).send({ message: 'Cart updated', cart });
    } catch (error) {
        res.status(500).send({ error: 'Server error.' });
    }
};

export const removeCartItem = async (req, res) => {
    try {
        const { productId } = req.params;

        let cart = await Cart.findOne({ user: req.user._id });
        if (!cart) return res.status(404).send({ error: 'Cart not found.' });

        const cartProductIndex = cart.products.findIndex(p => p.product.toString() === productId);

        if (cartProductIndex === -1) return res.status(404).send({ error: 'Product not found in cart.' });

        cart.products.splice(cartProductIndex, 1);

        await cart.save();
        res.status(200).send({ message: 'Product removed from cart', cart });
    } catch (error) {
        res.status(500).send({ error: 'Server error.' });
    }
};
