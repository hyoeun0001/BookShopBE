const express = require('express');
const router = express.Router();
const {
    addCartItems,
    getCartItems,
    removeCartItem
} = require('../controller/CartController');


router.use(express.json());

router.post("/", addCartItems);

router.get("/", getCartItems);

router.delete("/:cart_item_id", removeCartItem);

module.exports = router;