const express = require('express');
const router = express.Router();
// const { body, param, validationResult } = require('express-validator');
// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
// dotenv.config();

router.use(express.json());

router.post("/", [], (req, res, next) => {
    res.json('주문하기')
});

router.get("/", [], (req, res, next) => {
    res.json('주문 목록 조회')
});

router.get("/:bookId", [], (req, res, next) => {
    res.json('주문 상세')
});

module.exports = router;