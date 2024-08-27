
import { Order } from "../models/index.js";

export const createOrder = async (req, res) => {
    try {
        const { products, totalPrice } = req.body;

        const order = new Order({
            user: req.user._id,
            products,
            totalPrice,
        });

        await order.save();
        res.status(201).send({ message: 'Order created successfully', order });
    } catch (error) {
        res.status(500).send({ error: 'Server error.' });
    }
};

export const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id }).populate('products.product');
        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send({ error: 'Server error.' });
    }
};

export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('products.product');
        if (!order || order.user.toString() !== req.user._id.toString()) {
            return res.status(404).send({ error: 'Order not found.' });
        }
        res.status(200).send(order);
    } catch (error) {
        res.status(500).send({ error: 'Server error.' });
    }
};

export const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });

        if (!order) return res.status(404).send({ error: 'Order not found.' });
        res.status(200).send({ message: 'Order status updated successfully', order });
    } catch (error) {
        res.status(500).send({ error: 'Server error.' });
    }
};
