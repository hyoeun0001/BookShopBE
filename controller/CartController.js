const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');

const addCartItems = (req, res) => {
    const {book_id, quantity, user_id} = req.body;

    let sql = `INSERT INTO cartItems (book_id, quantity, user_id) VALUES (?, ?, ?) `;
    let values = [ book_id, quantity, user_id];
    conn.query(sql,values,
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
};

const getCartItems = (req, res) => {
    const {user_id, selected} = req.body;

    // let sql = `SELECT cartItems.id, book_id, title, summary, quantity, price 
	//             FROM cartItems LEFT
	//             JOIN books ON cartItems.book_id = books.id
    //             WHERE user_id = ? AND cartItems.id IN (?)`;
    // let values = [user_id, selected]
    let values = [user_id]
	let sql = `SELECT cartItems.id, book_id, title, summary, quantity, price 
	            FROM cartItems LEFT
	            JOIN books ON cartItems.book_id = books.id
                WHERE user_id = ?`;
	if(selected){
		sql +=` AND cartItems.id IN (?)`;
		values = [user_id, selected]
	}
    conn.query(sql,values,
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

const removeCartItem = (req, res) => {
    const {cart_id} = req.params;
 
    let sql = `DELETE FROM cartItems WHERE id = ? `;
    conn.query(sql,cart_id,
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

module.exports = {
    addCartItems,
    getCartItems,
    removeCartItem
};