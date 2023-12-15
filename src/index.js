'use strict'

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/andyshop')
process.on('uncaughtException', function (err) {
    console.log(err);
  });
const app = express()
const userRouter = require('./routers/userRouter')
const productRouter = require('./routers/productRouter')
const carrinhoRouter = require('./routers/carrinhoRouter')

app.use(express.json())
app.use(userRouter)
app.use(productRouter)
app.use(carrinhoRouter)

const port = 3445;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});