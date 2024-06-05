const ensureAuthorization = require('../auth');
const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');

const orderItems = async (req, res) => {
    const mariadb = require('mysql2/promise');
    const conn = await mariadb.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'BookShop',
        dateStrings: true
    })

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
        const { items, delivery, totalQuantity, totalPrice, firstBookTitle } = req.body;

        //delivery 삽입
        let sql = `INSERT INTO delivery (address, receiver, contact) 
                VALUES (?, ?, ?); `;
        let values = [delivery.address, delivery.receiver, delivery.contact];
        let [results] = await conn.execute(sql, values);
        let delivery_id = results.insertId;

        //orders 삽입
        sql = `INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id) 
            VALUES (?, ?, ?, ?, ?) `;
        values = [firstBookTitle, totalQuantity, totalPrice, authorization.id, delivery_id];
        [results] = await conn.execute(sql, values);
        let order_id = results.insertId;


        //장바구니에서 가져오기
        sql = `SELECT book_id, quantity FROM cartItems WHERE id IN (?)`;
        let [orderItems, fields] = await conn.query(sql, [items]);

        //orderedBook 삽입
        sql = `INSERT INTO orderedBook (order_id, book_id, quantity) VALUES ? `;
        values = [];
        orderItems.forEach((item) => {
            values.push([order_id, item.book_id, item.quantity]);
        })

        results = await conn.query(sql, [values])

        let result = await deleteCartItems(conn, items);

        return res.status(StatusCodes.OK).json(result);
        // return res.status(StatusCodes.BAD_REQUEST).end();
    }
};

const deleteCartItems = async (conn, items) => {
    let sql = `DELETE FROM cartItems WHERE id IN (?)`;

    let result = await conn.query(sql, [items]);
    return result;
}

const getOrders = (req, res) => {
    
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
        let sql = `SELECT orders.order_id, orders.created_at, 
	            delivery.address, delivery.receiver, delivery.contact,
                orders.book_title, orders.total_price,orders.total_quantity
                FROM orders LEFT JOIN delivery
                ON orders.delivery_id = delivery.delivery_id;`

        conn.query(sql,
            (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(StatusCodes.BAD_REQUEST).end();
                }

                if (results) {
                    results.map(function(result){
                        result.orderId = result.order_id;
                        result.createdAt = result.created_at;
                        result.bookTitle = result.book_title;
                        result.totalPrice = result.total_price;
                        result.totalCount = result.total_count;

                        delete result.order_id;
                        delete result.created_at;
                        delete result.book_title;
                        delete result.total_price;
                        delete result.total_count;
                    })
                    res.status(StatusCodes.OK).json(results)
                }
            }
        )
    }
};

const getOrderDetail = (req, res) => {
    let {order_id} = req.params;

    let sql = `SELECT orderedBook.book_id, books.title, 
                books.author, books.price, orderedBook.quantity
                FROM orderedBook LEFT JOIN books
                ON orderedBook.book_id = books.id
                WHERE orderedBook.order_id = ?`;

    conn.query(sql, order_id,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            results.map(function(result){
                result.bookId = result.book_id;
                delete result.book_id;
            })
            res.status(StatusCodes.OK).json(results)
        }
    )
};

module.exports = {
    orderItems,
    getOrders,
    getOrderDetail
};