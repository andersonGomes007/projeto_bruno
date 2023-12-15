const userModel = require('../models/userModel');
const jsonWebToken = require('jsonwebtoken');

const userController = {
    getUsers: async (req, res) => {
        try {
            const result = await userModel.find({});
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar usuários", message: error.message });
        }
    },

    getUser: async (req, res) => {
        try {
            const { email } = req.query;
            const result = await userModel.findOne({ email });
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar usuário", message: error.message });
        }
    },

    createUser: async (req, res) => {
        try {
            const newUser = await userModel.create(req.body);
            res.status(201).json({ message: "Usuário Criado", user: newUser });
        } catch (error) {
            res.status(500).json({ error: "Erro ao criar usuário", message: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userId = req.params.id;
            await userModel.findByIdAndDelete(userId);
            res.status(200).json({ message: "Usuário excluído com sucesso" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao excluir usuário", message: error.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const updatedUserData = req.body.updatedData;
            const updatedUser = await userModel.findByIdAndUpdate(userId, updatedUserData, { new: true });
            res.status(200).json({ message: "Usuário atualizado com sucesso", user: updatedUser });
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar usuário", message: error.message });
        }
    },

    auth: async (req, res) => {
        try {
            const result = await userModel.findOne({ login: req.body.login, password: req.body.password });
            if (result) {
                const secret = process.env.secret;
                const token = await jsonWebToken.sign(req.body, secret);
                res.set('Access-Token', token);
                res.end();
            } else {
                res.status(401).json({ message: 'Credenciais inválidas' });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro na autenticação", message: error.message });
        }
    }
};

module.exports = userController;
