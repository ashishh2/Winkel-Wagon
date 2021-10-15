import express from 'express';
import { protect, admin } from '../middlewares/authMiddleware.js';
import {
    getProductById,
    getProducts,
    deleteProduct,
    createProduct,
    updateProduct,
    createProductReview,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router
    .route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct);

export default router;
