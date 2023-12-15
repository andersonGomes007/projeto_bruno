'user strict'
const ProductModel = require('../models/productModel');
const jsonWebToken = require('jsonwebtoken');

const productController = {
  getProducts: async (req, res) => {
    try {
      const result = await ProductModel.find({});
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  },

  createProduct: async (req, res) => {
    try {
      await ProductModel.create(req.body);
      res.status(201).json({ message: 'Produto Criado' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar produto' });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      await ProductModel.findByIdAndDelete(productId);
      res.status(200).json({ message: 'Produto deletado' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar produto' });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      const updatedData = req.body;
      const updatedProduct = await ProductModel.findByIdAndUpdate(productId, updatedData, { new: true });
      res.status(200).json({ message: 'Produto atualizado', updatedProduct });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
  },

  auth: async (req, res) => {
    try {
      const token = req.headers.authorization;

      if (token) {
        const decoded = jsonWebToken.verify(token, process.env.secret);
        res.status(200).json({ message: 'Token válido', decoded });
      } else {
        res.status(401).json({ message: 'Token inválido' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro na autenticação' });
    }
  }
}

module.exports = productController;
