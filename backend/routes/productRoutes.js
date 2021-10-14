import express from 'express';
import { protect, admin } from '../middlewares/authMiddleware.js';
import {
    getProductById,
    getProducts,
    deleteProduct,
    createProduct,
    updateProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router
    .route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct);

export default router;
