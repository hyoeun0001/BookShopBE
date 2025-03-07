const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');//jwt 모듈
const crypto = require('crypto');
const dotenv = require('dotenv');//dotenv 모듈
dotenv.config();

const join = (req, res, next) => {
    const { email, password } = req.body;

    let sql = `INSERT INTO users (email, password, salt) VALUES(?, ?, ?)`;

    //회원가입 시 비번 암호화해서 암호화된 비밀번호와, salt 값을 같이 저장
    const salt = crypto.randomBytes(10).toString('base64');
    const hashPassword = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64')

    let values = [email, hashPassword, salt];
    conn.query(sql, values,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            if (results.affectedRows)
                return res.status(StatusCodes.CREATED).json(results);
            else
                return res.status(StatusCodes.BAD_REQUEST).end();
        }
    )
};

const login = (req, res, next) => {
    const { email, password } = req.body;

    let sql = `SELECT * FROM users WHERE email = ?`;
    conn.query(sql, email,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }

            const loginUser = results[0];

            if (!loginUser) {
                return res.status(StatusCodes.UNAUTHORIZED).end(); // 로그인 실패
            }

            //salt 값을 꺼내 날 것으로 들어온 비번을 암호화 해보고 
            const hashPassword = crypto.pbkdf2Sync(password, loginUser.salt, 10000, 10, 'sha512').toString('base64');


            //디비에 저장된 암호화 비교
            if ( loginUser.password == hashPassword) {
                const token = jwt.sign({
                    id: loginUser.id,
                    email: loginUser.email
                }, process.env.PRIVATE_KEY, {
                    expiresIn: '10m',
                    issuer: "hyoeun"
                });

                res.cookie("token", token, {
                    httpOnly: true
                });
                console.log(token);

                return res.status(StatusCodes.OK).json({ ...results[0], token: token });
            } else {
                return res.status(StatusCodes.UNAUTHORIZED).end();
            }
        }
    )
}

const passwordtResetRequest = (req, res) => {
    const { email } = req.body;

    let sql = `SELECT * FROM users WHERE email = ?`;
    conn.query(sql, email,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(400).end();
            }

            const User = results[0];
            if (User) {
                return res.status(StatusCodes.OK).json({
                    email: email
                });
            } else {
                return res.status(StatusCodes.UNAUTHORIZED).end();
            }
        }
    )
};

const passwordReset = (req, res) => {
    let { email, password } = req.body

    let sql = `UPDATE users SET password = ?, salt = ? WHERE email = ?`;

    const salt = crypto.randomBytes(10).toString('base64');
    const hashPassword = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64')

    let values = [hashPassword, salt, email]
    conn.query(sql, values,
        (err, results) => {
            if (err) {
                console.log(err)
                return res.status(StatusCodes.BAD_REQUEST).end()
            }
            if (results.affectedRows == 0) {
                return res.status(StatusCodes.BAD_REQUEST).end()
            } else {
                res.status(StatusCodes.OK).json(results);
            }
        }
    )
};

module.exports = {
    join,
    login,
    passwordtResetRequest,
    passwordReset
};