const ensureAuthorization = require("../auth");
const conn = require("../mariadb");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const getAllBooks = async (req, res) => {
  try {
    let allBooksRes = {};
    let { category_id, news, limit, currentPage } = req.query;

    limit = parseInt(limit);
    let offset = limit * (currentPage - 1);

    let sql = `SELECT SQL_CALC_FOUND_ROWS *, 
                  (SELECT count(*) FROM likes WHERE liked_book_id = books.id) AS likes 
               FROM books`;
    let values = [];

    if (category_id && news) {
      values = [category_id];
      sql += ` WHERE category_id = ? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()`;
    } else if (category_id) {
      values = [category_id];
      sql += ` WHERE category_id = ?`;
    } else if (news) {
      sql += ` WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()`;
    }

    if (limit && currentPage) {
      sql += ` LIMIT ? OFFSET ?`;
      values.push(limit, offset);
    }

    // 첫 번째 쿼리 실행
    const [books] = await conn.promise().query(sql, values);

    if (!books.length) {
      return res.status(404).json({ message: "Books not found" }); // 데이터 없으면 종료
    }

    // 책 데이터를 가공
    books.forEach((book) => {
      book.pubDate = book.pub_date;
      book.categoryId = book.category_id;
      delete book.pub_date;
      delete book.category_id;
    });
    allBooksRes.books = books;

    // 총 개수 계산 쿼리 실행
    const [totalCountResults] = await conn
      .promise()
      .query(`SELECT found_rows()`);
    let pagination = {
      currentPage: parseInt(currentPage),
      totalCount: totalCountResults[0]["found_rows()"],
    };
    allBooksRes.pagination = pagination;

    // 최종 응답
    return res.status(200).json(allBooksRes);
  } catch (err) {
    console.error("Error fetching books:", err);
    return res.status(400).json({ error: "Failed to fetch books" });
  }
};

const getBookDetail = (req, res) => {
  let { book_id } = req.params;

  let authorization = ensureAuthorization(req);

  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었습니다. 다시 로그인 하세요.",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰입니다.",
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
    console.log(authorization.id);
    // if (authorization instanceof ReferenceError) {
    //   sql = `SELECT * ,
    //                     (SELECT count(*) FROM likes WHERE liked_book_id=books.id) AS likes
    //                 FROM books
    //                 LEFT JOIN category
    //                 ON books.category_id = category.category_id
    //                 WHERE books.id = ?`;
    //   values = [book_id];
    // }
    conn.query(sql, values, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      if (results[0]) {
        results.map(function (result) {
          result.categoryName = result.category_name;
          result.pubDate = result.pub_date;
          result.categoryId = result.category_id;
          delete result.pub_date;
          delete result.category_name;
          delete result.category_id;
        });
        res.status(StatusCodes.OK).json(results[0]);
      } else {
        res.status(StatusCodes.NOT_FOUND).end();
      }
    });
  }
};

module.exports = {
  getAllBooks,
  getBookDetail,
};
