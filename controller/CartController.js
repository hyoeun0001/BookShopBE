const ensureAuthorization = require('../auth');
const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');


const addCartItems = (req, res) => {
    const {book_id, quantity} = req.body;

    let authorization = ensureAuthorization(req);

    if(authorization instanceof jwt.TokenExpiredError){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            "message" : "로그인 세션이 만료되었습니다. 다시 로그인 하세요."
        });
    } else if(authorization instanceof jwt.JsonWebTokenError){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            "message" : "잘못된 토큰입니다."
        });
    }else {
        let sql = `INSERT INTO cartItems (book_id, quantity, user_id) VALUES (?, ?, ?) `;
        let values = [book_id, quantity, authorization.id];
        conn.query(sql, values,
            (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(StatusCodes.BAD_REQUEST).end();
                }
                if (results) {
                    res.status(StatusCodes.OK).json(results)
                }
            }
        )

    }
};

const getCartItems = (req, res) => {
    const {selected} = req.body;

    let authorization = ensureAuthorization(req);

    if (authorization instanceof jwt.TokenExpiredError) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            "message": "로그인 세션이 만료되었습니다. 다시 로그인 하세요."
        });
    } else if(authorization instanceof jwt.JsonWebTokenError){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            "message" : "잘못된 토큰입니다."
        });
    } else {
        let values = [authorization.id]
        let sql = `SELECT cartItems.id, book_id, title, summary, quantity, price 
	            FROM cartItems LEFT
	            JOIN books ON cartItems.book_id = books.id
                WHERE user_id = ?`;
        if (selected) {
            sql += ` AND cartItems.id IN (?)`;
            values = [authorization.id, selected]
        }
        conn.query(sql, values,
            (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(StatusCodes.BAD_REQUEST).end();
                }

                if (results) {
                    results.map(function(result){
                        result.bookId = result.book_id;
                        delete result.book_id;
                    })
                    res.status(StatusCodes.OK).json(results)
                }
            }
        )
    }
}

const removeCartItem = (req, res) => {
    const { cart_item_id } = req.params;

    let authorization = ensureAuthorization(req);

    if (authorization instanceof jwt.TokenExpiredError) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            "message": "로그인 세션이 만료되었습니다. 다시 로그인 하세요."
        });
    } else if (authorization instanceof jwt.JsonWebTokenError) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            "message": "잘못된 토큰입니다."
        });
    } else {
        let sql = `DELETE FROM cartItems WHERE id = ? `;
        conn.query(sql, cart_item_id,
            (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(StatusCodes.BAD_REQUEST).end();
                }
                if (results) {
                    res.status(StatusCodes.OK).json(results)
                }
            }
        )
    }
}


module.exports = {
    addCartItems,
    getCartItems,
    removeCartItem
};