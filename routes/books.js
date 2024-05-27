const express = require('express');
const router = express.Router();
const {
    getAllBooks,
    getBookDetail
} = require('../controller/BookController');

router.use(express.json());

router.get("/", getAllBooks);
router.get("/:book_id", getBookDetail);

module.exports = router;