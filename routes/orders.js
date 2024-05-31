const express = require('express');
const router = express.Router();
const {
    orderItems,
    getOrders,
    getOrderDetail
} = require('../controller/OrderController');

router.use(express.json());

router.post("/", orderItems);

router.get("/", getOrders);

router.get("/:order_id", getOrderDetail);

module.exports = router;