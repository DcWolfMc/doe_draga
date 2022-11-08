const validacoes = require('../validacoes-comuns');
const ObjectId = require("mongodb").ObjectId;
const Postt = require('../models/Post');
const { InvalidArgumentError } = require('../erros');

class Post {
  constructor(post) {
    this.id = post.id;
    this.email = post.email;
    this.nome_criador = post.nome_criador;
    this.telefone = post.telefone;
    this.data_liberacao = post.data_liberacao;
    this.data_termino = post.data_termino;
    this.duracao = post.duracao;
    this.titulo = post.titulo;
    this.pixKey = post.pixKey;
    this.texto = post.texto;
    this.imagem = post.imagem;
    this.status = post.status;

    this.valida();
  }

  async adiciona() {
    if (await Post.buscaPorId_projeto(this.id)) {
      throw new InvalidArgumentError('O usuário já existe!');
    }

    return Postt.create(this);
  }

  valida() {
    validacoes.campoStringNaoNulo(this.id, 'conteúdo');
    validacoes.campoStringNaoNulo(this.email, 'conteúdo');
    validacoes.campoStringNaoNulo(this.nome_criador, 'conteúdo');
    validacoes.campoStringNaoNulo(this.telefone, 'conteúdo');
    validacoes.campoStringNaoNulo(this.chave_pix, 'conteúdo');
    validacoes.campoStringNaoNulo(this.texto, 'conteúdo');
  }

  static lista() {
    return Postt.find();
  }

  static async buscaPorId_projeto(id) {
    return Postt.find({ id: id }).sort([['createdAt', -1]]);
  }

  async deleta() {
    return Postt.deleteOne(this);
  }

  async update(id, new_value) {
    return Postt.findByIdAndUpdate({ _id: ObjectId(id) }, new_value);
  }
}

module.exports = Post;
