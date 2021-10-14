import express from 'express';
import {
    addOrderItems,
    getOrderById,
    getOrders,
    updateOrderToDelivered,
    updateOrderToPaid,
} from '../controllers/orderController.js';
import { admin, protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);
router.route('/:id').get(protect, getOrderById);
router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);

export default router;
