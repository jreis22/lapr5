import * as Constants from './constants';

export class Armario {

    constructor(altura, largura, profundidade, material) {

        this.altura = altura;
        this.largura = largura;
        this.profundidade = profundidade;
        this.material = material;
        this.modulos = [];

        Armario.prototype.adicionarModulo = function (modulo,index) {

            this.modulos.splice(index,0,modulo);

        }

        Armario.prototype.removerModulo = function (index) {
            this.modulos.splice(index,1);

        }

        // Largura total ocupada por módulos
        Armario.prototype.larguraOcupadaTotal = function () {

            var lTotal = 0;

            for (var i = 0; i < this.modulos.length; i++) {
                lTotal += this.modulos[i].modulo.largura;
            }

            return lTotal;
        }

        // Largura total ocupado por módulos até ao índice indexModulo (exclusivo)
        Armario.prototype.larguraOcupada = function (indexModulo) {

            var lTotal = 0;

            for (var i = 0; i < indexModulo && i < this.modulos.length; i++) {
                lTotal += this.modulos[i].modulo.largura;
            }

            return lTotal;
        }

        Armario.prototype.alturaMaximaDosModulos = function () {
            let alturaMax = -1;

            for (var i = 0; i < this.modulos.length; i++) {
                let altura = this.modulos[i].modulo.alturaOcupadaTotal();
                if (altura > alturaMax) {
                    alturaMax = altura;
                }
            }
            return alturaMax+ Constants.ESPESSURA_PAREDES;
        }

        Armario.prototype.profundidadeMaximaDosModulos = function () {
            let profundidadeMax = -1;

            for (var i = 0; i < this.modulos.length; i++) {
                let profundidade = this.modulos[i].modulo.profundidade;
                if (profundidade > profundidadeMax && this.modulos[i].modulo.produtos.length > 0) {
                    profundidadeMax = profundidade;
                }
            }
            return profundidadeMax;
        }


        Armario.prototype.mudarDimensoes = function (altura, largura, profundidade) {
            this.altura = altura;
            this.largura = largura;
            this.profundidade = profundidade;

            this.updateAltura(altura);
            this.updateProfundidade(profundidade);
        }

        Armario.prototype.updateAltura = function (alturaReal) {
            for (var i = 0; i < this.modulos.length; i++) {
                this.modulos[i].modulo.altura = alturaReal;
            }

        }

        Armario.prototype.updateProfundidade = function (profundidadeReal) {
            for (var i = 0; i < this.modulos.length; i++) {
                this.modulos[i].modulo.profundidade = profundidadeReal;
                this.modulos[i].modulo.updateProfundidadeProdutos(profundidadeReal);
            }
        }
    }
}