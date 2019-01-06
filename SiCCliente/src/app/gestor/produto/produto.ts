import { Categoria} from '../categoria/categoria';
import { Dimensao } from './dimensao';
import { TipoProduto } from './tipo-produto';

export class Produto {
    id: number;
    nome : string;
    categoria : Categoria;
    altura :  Dimensao;
    largura: Dimensao;
    profundidade: Dimensao;
    tipo: TipoProduto;

    constructor(nome: string, categoria: Categoria, altura: Dimensao, largura: Dimensao, profundidade: Dimensao, tipo: TipoProduto) {

        this.nome=nome;
        this.categoria=categoria;
        this.altura=altura;
        this.largura=largura;
        this.profundidade=profundidade;
        this.tipo=tipo;

    }
}