export class Modulo {

    constructor(altura, largura, profundidade, material, nome) {

        this.altura = altura;
        this.largura = largura;
        this.profundidade = profundidade;
        this.material = material;
        this.nome = nome;
        this.produtos = [];

        Modulo.prototype.addProduto = function (produto,index) {
            this.produtos.splice(index, 0, produto);
        }

        Modulo.prototype.removerProduto = function (index) {
            this.produtos.splice(index, 1);
        }

        Modulo.prototype.alturaOcupadaTotal = function () {

            var lTotal = 0;

            for (var i = 0; i < this.produtos.length; i++) {
                lTotal += this.produtos[i].altura;
            }

            return lTotal;
        }

        Modulo.prototype.alturaOcupada = function (indexProduto) {

            var lTotal = 0;

            for (var i = 0; i < indexProduto; i++) {
                lTotal += this.produtos[i].altura;
            }

            return lTotal;
        }

        Modulo.prototype.updateProfundidadeProdutos = function (profundidade) {

            for (var i = 0; i < this.produtos.length; i++) {
                this.produtos[i].profundidade=profundidade;
            }
        }
    }
}