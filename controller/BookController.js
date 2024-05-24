const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');


const getAllBooks = (req, res) => {
    let {category_id, new_books, limit, current_page} = req.query;

    limit = parseInt(limit)
    let offset = limit * (current_page-1)
    
    let sql = `SELECT * FROM books`;
    let values = [];
    if (category_id && new_books) {
        values = [category_id];
        sql += ` WHERE category_id = ? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()`;
    }else if(category_id){
        values = [category_id];
        sql += ` WHERE category_id = ?`;
    }else if(new_books){
        sql += ` WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()`
    }

    sql += ` LIMIT ? OFFSET ?`
    values.push(limit)
    values.push(offset)
    conn.query(sql, values,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            if (results) {
                res.status(StatusCodes.OK).json(results);
            } else {
                res.status(StatusCodes.NOT_FOUND).end()
            }
        }
    )
};

const getBookDetail = (req, res) => {
    let {book_id} = req.params;

    let sql = `SELECT * FROM books LEFT
    JOIN category ON books.category_id = category.category_id
    WHERE books.id = ?`;

    conn.query(sql,book_id,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            if(results[0]){
                res.status(StatusCodes.OK).json(results[0]);
            }else{
                res.status(StatusCodes.NOT_FOUND).end()
            }
        }
    )
};


module.exports = {
    getAllBooks,
    getBookDetail
};