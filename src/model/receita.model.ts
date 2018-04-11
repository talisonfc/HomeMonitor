import { ProdutoModel } from './produto.model'

export class Passo{
    numero_de_sequencia: number
    descricao: string
}

export class ReceitaModel{
    nome: string
    ingredientes: Array<ProdutoModel>
    modo_de_preparo: Array<Passo>
}