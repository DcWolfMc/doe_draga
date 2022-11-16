export interface Announce {
    _id?:string
    id: string
    email: string
    nome_criador: string
    telefone: string
    data_criacao?: Date
    data_liberacao?: Date
    data_termino?: Date
    duracao?: number
    titulo: string
    pixKey: string
    texto: string
    imagem?: string
    status: "ativo"|"encerrado"|"analise"
  }