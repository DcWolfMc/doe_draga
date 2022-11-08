const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    nome_criador: {
        type: String,
        require: true,
    },
    telefone:{
        type: String,
        required: true,
    },
    data_liberacao: {
        type: Date
    },
    data_termino: {
        type: Date
    },
    duracao: {
        type: Number
    },
    titulo:{
        type: String,
        required: true,
    },
    pixKey: {
        type: String,
        require: true,
    },
    texto:{
        type: String,
        required: true,
    },
    imagem:{
        type: String
    },
    status:{
        type: String,
        required: true,
    },
    data_criacao:{
        type: Date,
        default: Date.now,
    }, 
},
{
    collection: 'posts'
},);


module.exports = mongoose.model('Post', UserSchema)