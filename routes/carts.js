const express = require('express');
const router = express.Router();
// const { body, param, validationResult } = require('express-validator');
// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
// dotenv.config();

router.use(express.json());

router.post("/", [], (req, res, next) => {
    res.json('장바구니 담기')
});

router.get("/", [], (req, res, next) => {
    res.json('장바구니 담은것들')
});
router.delete("/:bookId", [], (req, res, next) => {
    res.json('장바구니에서 삭제')
});


// router.get("/", [], (req, res, next) => {
//     res.json('주문 예상 상품들')
// });

module.exports = router;