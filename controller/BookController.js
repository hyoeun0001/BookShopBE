const ensureAuthorization = require('../auth');
const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');

const getAllBooks = (req, res) => {
    let allBooksRes = {};
    let {category_id, new_books, limit, current_page} = req.query;

    limit = parseInt(limit)
    let offset = limit * (current_page-1)
    
    let sql = `SELECT SQL_CALC_FOUND_ROWS *,(SELECT count(*) FROM likes WHERE liked_book_id=books.id) AS likes  FROM books`;
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
    values.push(limit,offset)
    conn.query(sql, values,
        (err, results) => {
            if (err) {
                console.log(err);
                //return res.status(StatusCodes.BAD_REQUEST).end();
            }
            console.log(results);
            if (results.length) {
                results.map(function(result){
                    result.pubDate = result.pub_date;
                    result.categoryId = result.category_id;
                    delete result.pub_date;
                    delete result.category_id;
                })
                allBooksRes.books = results;
            } else {
                res.status(StatusCodes.NOT_FOUND).end()
            }
        }
    )
    sql = `SELECT found_rows() `
    conn.query(sql,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            let pagination = {};
            pagination.currentPage = parseInt(current_page);
            pagination.totalCount = results[0]["found_rows()"];

            allBooksRes.pagination = pagination;

            return res.status(StatusCodes.OK).json(allBooksRes);
        }
    )
};

const getBookDetail = (req, res) => {
    let {book_id} = req.params;

    let authorization = ensureAuthorization(req);

    if(authorization instanceof jwt.TokenExpiredError){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            "message" : "로그인 세션이 만료되었습니다. 다시 로그인 하세요."
        });
    } else if(authorization instanceof jwt.JsonWebTokenError){
        return res.status(StatusCodes.BAD_REQUEST).json({
            "message" : "잘못된 토큰입니다."
        });
     } else {
        let sql = `SELECT *,
                    (SELECT count(*) FROM likes WHERE liked_book_id=books.id) AS likes,
                    (SELECT EXISTS (SELECT * FROM likes WHERE user_id = ? AND liked_book_id=?)) AS liked 
                FROM books 
                LEFT JOIN category
                ON books.category_id = category.category_id
                WHERE books.id = ?`;
        let values = [authorization.id, book_id, book_id];
        if(authorization instanceof ReferenceError){
            sql = `SELECT * ,
                        (SELECT count(*) FROM likes WHERE liked_book_id=books.id) AS likes
                    FROM books 
                    LEFT JOIN category
                    ON books.category_id = category.category_id
                    WHERE books.id = ?`;
            values = [book_id]
        }
        conn.query(sql, values,
            (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(StatusCodes.BAD_REQUEST).end();
                }
                if (results[0]) {
                    results.map(function(result){
                        result.categoryName = result.category_name;
                        result.pubDate = result.pub_date;
                        delete result.pub_date;
                        delete result.category_name;
                        delete result.category_id;
                    })
                    res.status(StatusCodes.OK).json(results[0]);
                } else {
                    res.status(StatusCodes.NOT_FOUND).end()
                }
            }
        )
    }
};


module.exports = {
    getAllBooks,
    getBookDetail
};