export interface Announce {
    _id?:string
    id: string
    email: string
    nome_criador: string
    telefone: string
    data_criacao?: string
    data_liberacao?: string
    data_termino?: string
    duracao?: number
    titulo: string
    pixKey: string
    texto: string
    imagem?: string
    status: "ativo"|"encerrado"|"analise"
  }