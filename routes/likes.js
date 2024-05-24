const express = require('express');
const router = express.Router();
// const { body, param, validationResult } = require('express-validator');
// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
// dotenv.config();

router.use(express.json());

router.post("/:bookId", [], (req, res, next) => {
    res.json('좋아요 추가')
});

router.delete("/:bookId", [], (req, res, next) => {
    res.json('좋아요 삭제')
});


module.exports = router;