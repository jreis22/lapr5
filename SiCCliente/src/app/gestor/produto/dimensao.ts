export class Dimensao {
    listaValores: number[];
    tipo:number;
    unidade:string;

    constructor(listaValores: number[], tipo: number, unidade: string) {

        this.listaValores = listaValores;
        this.tipo = tipo;
        this.unidade = unidade;

    }
}