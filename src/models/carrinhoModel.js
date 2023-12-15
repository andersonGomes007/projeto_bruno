'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const carrinhoSchema = new Schema({
    user: {type: mongoose.Types.ObjectId, ref: 'User'},
    produto: [{type: mongoose.Types.ObjectId, ref: 'Product'}],

})
module.exports = mongoose.model('Carrinho', carrinhoSchema)