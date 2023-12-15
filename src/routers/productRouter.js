'use strict';

const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

productRouter.get('/api/product', productController.getProducts);
productRouter.post('/api/product', productController.createProduct);
productRouter.put('/api/product/:id', productController.updateProduct);
productRouter.delete('/api/product/:id', productController.deleteProduct);

module.exports = productRouter;
