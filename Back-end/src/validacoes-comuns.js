const { InvalidArgumentError } = require('./erros');


module.exports = {
  campoStringNaoNulo: (valor, nome) => {
    if (typeof valor !== 'string' || valor === 0 || valor == "" || valor == " ")
      throw new InvalidArgumentError(
        `É necessário preencher o campo ${nome}!`
        );
  },

  campoTamanhoMinimo: (valor, nome, minimo) => {
    if (valor.length < minimo)
      throw new InvalidArgumentError(
        `O campo ${nome} precisa ser maior que ${minimo} caracteres!`
      );
  },

  campoTamanhoMaximo: (valor, nome, maximo) => {
    if (valor.length > maximo)
      throw new InvalidArgumentError(
        `O campo ${nome} precisa ser menor que ${maximo} caracteres!`
      );
  },

  senhaForte: (valor, nome) => {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!%])[0-9a-zA-Z$*&@#!%]{8,16}$/;
    if (re.test(valor) == false)
      throw new InvalidArgumentError(
        `O campo ${nome} precisa ter letras maiúsculas, minúsculas, números e caracteres especiais ($*&@#!%)`
      );
  },

  validaDataNascimento: (valor) => {
    const dataAtual = new Date()
    const valor2 = new Date(valor)
    const dataMais18 = new Date(valor2.getUTCFullYear() + 18, valor2.getUTCMonth(), valor2.getUTCDate())

    if (dataMais18 >= dataAtual) {
      throw new InvalidArgumentError(
        `Você deve ser maior de 18 anos para se cadastrar`
      );
    }
  },

  validaInput: (valor, nome) => {
    var re = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;
    if (re.test(valor) == false)
      throw new InvalidArgumentError(
        `O campo ${nome} recebe apenas letras`
      );
  },

  validaEmail: (valor) => {
    if (valor === false) {
      throw new InvalidArgumentError(
        `Email não verificado!`
      );
    }
  },

};
