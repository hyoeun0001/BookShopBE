const express = require('express');
const router = express.Router();
const {
    allCategory
} = require('../controller/CategoryController');

router.use(express.json());

router.get("/", allCategory);

module.exports = router;