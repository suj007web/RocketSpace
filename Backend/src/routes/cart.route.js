// routes/cartRoutes.js
import express from 'express';
import {
    addToCart,
    getCart,
    updateCartItem,
    removeCartItem,
} from '../controllers/cart.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/add', authMiddleware, addToCart);
router.get('/', authMiddleware, getCart);
router.put('/update', authMiddleware, updateCartItem);
router.delete('/remove/:productId', authMiddleware, removeCartItem);

export default router;
