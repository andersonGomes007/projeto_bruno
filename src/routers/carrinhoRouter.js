const express = require('express');
const carrinhoRouter = express.Router();
const carrinhoController = require('../controllers/carrinhoControler');

carrinhoRouter.route('/api/carrinho')
    .get((req, res) => carrinhoController.getCarrinhos(req, res))
    .post((req, res) => carrinhoController.createCarrinho(req, res))
    .put((req, res) => carrinhoController.updateCarrinho(req, res))
    .delete((req, res) => carrinhoController.deleteCarrinho(req, res));

module.exports = carrinhoRouter;
