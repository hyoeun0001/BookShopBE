const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000', // 프론트엔드가 실행되는 주소
    credentials: true, // 쿠키를 사용할 경우
  }));

const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT);

const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const categoryRouter = require('./routes/category');
const likeRouter = require('./routes/likes');
const cartRouter = require('./routes/carts');
const orderRouter = require('./routes/orders');

app.use("/users",userRouter);
app.use("/books",bookRouter);
app.use("/category",categoryRouter);
app.use("/likes",likeRouter);
app.use("/carts",cartRouter);
app.use("/orders",orderRouter);