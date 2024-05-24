const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT);

const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const categoryRouter = require('./routes/category');
const likeRouter = require('./routes/books');
const cartRouter = require('./routes/books');
const orderRouter = require('./routes/books');

app.use("/users",userRouter);
app.use("/books",bookRouter);
app.use("/category",categoryRouter);
app.use("/likes",likeRouter);
app.use("/carts",cartRouter);
app.use("/orders",orderRouter);