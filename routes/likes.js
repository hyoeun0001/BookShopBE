const express = require('express');
const router = express.Router();
const {
    addLike,
    removeLike
} = require('../controller/LikeController');

module.exports = router;

router.use(express.json());

router.post("/:book_id", addLike);

router.delete("/:book_id", removeLike);


module.exports = router;