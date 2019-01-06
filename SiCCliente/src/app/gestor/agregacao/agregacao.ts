export class Agregacao {
    produtoIdPai: number;
    produtoIdFilho: number;
    confirmation: boolean;

    constructor(produtoIdPai: number, produtoIdFilho: number, confirmation: boolean) {
        this.produtoIdPai = produtoIdPai;
        this.produtoIdFilho = produtoIdFilho;
        this.confirmation = confirmation;

    }
}