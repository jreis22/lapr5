import { ProdutoItem } from "../item/item";
import { EstadoEncomenda } from "./estado-entrega";

export class Encomenda {
    _id: string;
    itens: ProdutoItem[] = [];
    cidadeEntrega: string;
    estado : EstadoEncomenda;
    idUtilizador: number;
}