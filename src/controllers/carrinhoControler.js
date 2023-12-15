'use strict';

const CarrinhoModel = require('../models/carrinhoModel');
const jsonWebToken = require('jsonwebtoken');

const carrinhoController = {
    getCarrinhos: async (req, res) => {
        try {
            const result = await CarrinhoModel.find({});
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar carrinhos' });
        }
    },

    getCarrinho: async (req, res) => {
        try {
            const { email } = req.query;
            const result = await CarrinhoModel.findOne({ email });
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar carrinho' });
        }
    },

    createCarrinho: async (req, res) => {
        try {
            await CarrinhoModel.create(req.body);
            res.status(201).json({ message: 'Carrinho Criado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar carrinho' });
        }
    },

    deleteCarrinho: async (req, res) => {
        try {
            const { carrinho } = req.params;
            await CarrinhoModel.findByIdAndDelete(carrinho);
            res.status(200).json({ message: 'Carrinho deletado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar carrinho' });
        }
    },

    updateCarrinho: async (req, res) => {
        try {
            const { carrinho } = req.params;
            const updatedData = req.body;
            const updatedCarrinho = await CarrinhoModel.findByIdAndUpdate(carrinho, updatedData, { new: true });
            res.status(200).json({ message: 'Carrinho atualizado', updatedCarrinho });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar carrinho' });
        }
    },

    auth: async (req, res) => {
        try {
            const { login, password } = req.body;
            const result = await CarrinhoModel.findOne({ login, password });
            if (result) {
                const secret = process.env.secret;
                const token = await jsonWebToken.sign(req.body, secret);
                res.set('Access-Token', token);
                res.end();
            } else {
                res.status(401).json({ message: 'Credenciais inválidas' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = carrinhoController;
