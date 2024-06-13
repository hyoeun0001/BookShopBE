const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const {
    join,
    login,
    passwordtResetRequest,
    passwordReset
} = require('../controller/UserController');

const { body, param, validationResult } = require('express-validator')

const validate = (req, res, next) => {
    const err = validationResult(req)

    if (err.isEmpty()) {
        return next();//다음 할 일 (미들 웨어, 함수)
    }else{
        return res.status(400).json(err.array())
    }
}

router.use(express.json());

router.post("/join",
    [
        body('email').notEmpty().withMessage('이메일 또는 비밀번호를 확인해 주세요'),
        body('password').notEmpty().withMessage('이메일 또는 비밀번호를 확인해 주세요'),
        validate
    ],
    join);

router.post("/login",
    [
        body('email').notEmpty().withMessage('이메일 또는 비밀번호를 확인해 주세요'),
        body('password').notEmpty().withMessage('이메일 또는 비밀번호를 확인해 주세요'),
        validate
    ],
    login);

router.post("/reset",
    [
        body('email').notEmpty().withMessage('이메일 또는 비밀번호를 확인해 주세요'),
        validate
    ],
    passwordtResetRequest);

router.put("/reset",
    [
        body('email').notEmpty().withMessage('이메일 또는 비밀번호를 확인해 주세요'),
        body('password').notEmpty().withMessage('이메일 또는 비밀번호를 확인해 주세요'),
        validate
    ],
    passwordReset);

module.exports = router;