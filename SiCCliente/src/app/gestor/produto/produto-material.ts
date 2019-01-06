export class ProdutoMaterial {
    produtoId: number;
    materialId: number;

    constructor(produtoId: number, materialId: number) {
        this.produtoId = produtoId;
        this.materialId = materialId;
    }
}