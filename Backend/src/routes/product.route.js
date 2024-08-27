
import express from 'express';
import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} from '../controllers/product.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', authMiddleware, createProduct); 
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', authMiddleware, updateProduct); // Only authenticated users can update products
router.delete('/:id', authMiddleware, deleteProduct); // Only authenticated users can delete products

export default router;
