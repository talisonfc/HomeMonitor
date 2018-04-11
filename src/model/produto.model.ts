export class Custo{
    valor: number
    loja: string
}

export class ProdutoModel{
    key?: string
    nome: string
    codigo?: string 
    qtn?: number
    qtn_min?: number
    show?: boolean
    categoria?: string
    marca?: string
    custo?: Array<Custo>
    image?: string
}