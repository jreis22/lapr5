
export class ProdutoItem {
    _id: string;
    idProduto: number;
    altura:  number;
    largura: number;
    profundidade: number;
    idMaterial: number;
    idAcabamento: number;
    filhos: ProdutoItem[] = [];
}