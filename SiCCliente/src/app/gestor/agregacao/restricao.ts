import { TipoRestricao } from "./tipo-restricao";

export class Restricao {
    id: number;
    tipoRes: TipoRestricao;
    params: string;
    produtoProdutoIdPai: number;
    produtoProdutoIdFilho: number;

    constructor(tipoRes: TipoRestricao, params: string, produtoIdPai: number, produtoIdFilho: number) {
      this.tipoRes=tipoRes;
      this.params=params;
      this.produtoProdutoIdPai=produtoIdPai;
      this.produtoProdutoIdFilho=produtoIdFilho;
    }
}