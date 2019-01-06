import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../gestor/categoria/categoria';
import { Produto } from '../../gestor/produto/produto';
import { Material } from '../../gestor/material/material';
import { CategoriaService } from '../../gestor/categoria/categoria.service';
import { ProdutoMaterialService } from '../../gestor/produto/produto-material.service';
import { ProdutoService } from '../../gestor/produto/produto.service';
import { MaterialService } from '../../gestor/material/material.service';
import { ProdutoMaterial } from '../../gestor/produto/produto-material';
import { Dimensao } from '../../gestor/produto/dimensao';
import { MatSnackBar } from '@angular/material';
import { TipoProduto } from '../../gestor/produto/tipo-produto';
import { AgregacaoService } from '../../gestor/agregacao/agregacao.service';
import { Agregacao } from '../../gestor/agregacao/agregacao';
import { TipoDimensao } from '../../gestor/produto/tipo-dimensao';
import { TipoRestricao } from '../../gestor/agregacao/tipo-restricao';
import { RestricaoService } from '../../gestor/agregacao/restricao.service';
import { Restricao } from '../../gestor/agregacao/restricao';

@Component({
  selector: 'app-gerir-produto',
  templateUrl: './gerir-produto.component.html',
  styleUrls: ['./gerir-produto.component.css']
})
export class GerirProdutoComponent implements OnInit {

  statusMessage: string;
  flagServer: boolean = false;

  //lists
  allProdutos: Produto[];
  allCategorias: Categoria[];
  allMateriais: Material[];


  selectedProduto: Produto = null;
  selectedCategoria: number = 0;

  tipoValor1: number = 0;
  tipoValor2: number = 0;
  tipoValor3: number = 0;

  valoresAltura: number[] = [];
  valorAlturaSelecionado: number = null;
  valoresLargura: number[] = [];
  valorLarguraSelecionado: number = null;
  valoresProfundidade: number[] = [];
  valorProfundidadeSelecionado: number = null;
  nomeProduto: string = null;

  campoAltura: number = null;
  campoLargura: number = null;
  campoProfundidade: number = null;
  listaTiposProduto: TipoProduto[] = [];
  listaTiposDimensao: TipoDimensao[] = [];
  selectedTipoProduto: number = 0;
  selectedMaterialExistente: number = 0;
  selectedMaterialDoProduto: number = 0;
  materiaisDoProduto: Material[] = [];
  selectedProdutoExistente: number = 0;
  selectedProdutoFilho: number = 0;
  tipoAgregacao: boolean = false;
  listaProdutosFilho: Produto[] = [];
  listaTiposDeAgregacao: boolean[] = [];

  selectedTipoRestricao: number = 0;
  selectedRestricao: number = null;
  volumeMinimo: number = null;
  volumeMaximo: number = null;
  listaTiposRestricao: TipoRestricao[] = [];
  listaRestricoesDeAgregacao: Restricao[] = [];


  constructor(private produtoSrv: ProdutoService, private categoriaSrv: CategoriaService,
    private materialSrv: MaterialService, private produtoMaterialSrv: ProdutoMaterialService,
    private agregacaoSrv: AgregacaoService, private restricaoSrv: RestricaoService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getProdutos(); this.getCategorias(); this.getMateriais();
    Object.keys(TipoProduto).map(key => {
      if (isNaN(Number(TipoProduto[key]))) {
        this.listaTiposProduto.push(TipoProduto[key]);
      }
    });
    Object.keys(TipoDimensao).map(key => {
      if (isNaN(Number(TipoDimensao[key]))) {
        this.listaTiposDimensao.push(TipoDimensao[key]);
      }
    });
    Object.keys(TipoRestricao).map(key => {
      if (isNaN(Number(TipoRestricao[key]))) {
        this.listaTiposRestricao.push(TipoRestricao[key]);
      }
    });
  }

  private getProdutos(): void {
    this.produtoSrv.getProdutos().subscribe(
      data => {
        this.allProdutos = data;
      },
      error => {
        this.statusMessage = "Error: Service Unavailable"; console.log(error);
        this.flagServer = true;
      });
  }

  private getMateriais(): void {
    this.materialSrv.getMateriais().subscribe(
      data => {
        this.allMateriais = data;
      },
      error => {
        this.statusMessage = "Error: Service Unavailable"; console.log(error);
        this.flagServer = true;
      });

  }

  private getCategorias(): void {
    this.categoriaSrv.getCategorias().subscribe(
      data => {
        this.allCategorias = data;
        this.selectedCategoria = 0;
      },
      error => {
        this.statusMessage = "Error: Service Unavailable"; console.log(error);
        this.flagServer = true;
      });
  }


  addValor1(): void {

    let valor = this.campoAltura;

    if (isNaN(Number(valor))) {
      this.snackBar.open("Insira valores válidos (por exemplo 1.2)", "", { duration: 4000 });
      return;
    }

    if (Number(valor) < Number(1) || Number(valor) > Number(3)) {
      this.snackBar.open("A altura está entre 1 e 3", "", { duration: 4000 });
      return;
    }

    if (this.tipoValor1 == 1 && this.valoresAltura.length == 2) {
      this.snackBar.open("Não é permitido existir mais de 2 valores para comprimentos continuos", "", { duration: 4000 });
      return;
    }

    for (let i = 0; i < this.valoresAltura.length; i++) {
      if (this.valoresAltura[i] == valor) {
        return;
      }
    }
    this.valoresAltura.push(valor);
    this.valoresAltura.sort((a, b) => a - b);
    this.valorAlturaSelecionado = valor;
  }

  addValor2(): void {

    let valor = this.campoLargura;

    if (isNaN(Number(valor))) {
      this.snackBar.open("Insira valores válidos (por exemplo 1.2)", "", { duration: 4000 });
      return;
    }

    if (Number(valor) < Number(1) || Number(valor) > Number(3)) {
      this.snackBar.open("A largura está entre 1 e 3", "", { duration: 4000 });
      return;
    }

    if (this.tipoValor2 == 1 && this.valoresLargura.length == 2) {
      this.snackBar.open("Não é permitido existir mais de 2 valores para comprimentos continuos", "", { duration: 4000 });
      return;
    }

    for (let i = 0; i < this.valoresLargura.length; i++) {
      if (this.valoresLargura[i] == valor) {
        return;
      }
    }
    this.valoresLargura.push(valor);
    this.valoresLargura.sort((a, b) => a - b);
    this.valorLarguraSelecionado = valor;
  }

  addValor3(): void {

    let valor = this.campoProfundidade;

    if (isNaN(Number(valor))) {
      this.snackBar.open("Insira valores válidos (por exemplo 1.2)", "", { duration: 4000 });
      return;
    }

    if (Number(valor) < Number(0.5) || Number(valor) > Number(1.5)) {
      this.snackBar.open("A profundidade está entre 0.5 e 1.5", "", { duration: 4000 });
      return;
    }

    if (this.tipoValor3 == 1 && this.valoresProfundidade.length == 2) {
      this.snackBar.open("Não é permitido existir mais de 2 valores para comprimentos continuos", "", { duration: 4000 });
      return;
    }

    for (let i = 0; i < this.valoresProfundidade.length; i++) {
      if (this.valoresProfundidade[i] == valor) {
        return;
      }
    }
    this.valoresProfundidade.push(valor);
    this.valoresProfundidade.sort((a, b) => a - b);
    this.valorProfundidadeSelecionado = valor;
  }

  addMaterialCreate(): void {

    let m: Material = this.allMateriais[this.selectedMaterialExistente];

    if (this.existeNoArray(m, this.materiaisDoProduto)) {
      return;
    }
    this.materiaisDoProduto.push(m);
    this.selectedMaterialDoProduto = this.materiaisDoProduto.length - 1;
  }

  removeMaterialCreate(): void {
    if (this.materiaisDoProduto.length == 0) {
      return;
    }

    this.materiaisDoProduto.splice(this.selectedMaterialDoProduto, 1);
    if (this.materiaisDoProduto.length == 0) {
      this.selectedMaterialDoProduto = null;
    } else {
      this.selectedMaterialDoProduto = 0;
    }
  }

  addMaterial(): void {

    if (this.selectedProduto == null) {
      return;
    }


    let m: Material = this.allMateriais[this.selectedMaterialExistente];

    if (this.existeNoArray(m, this.materiaisDoProduto)) {
      return;
    }

    let produtoMaterial: ProdutoMaterial = new ProdutoMaterial(this.selectedProduto.id, m.id);
    this.produtoMaterialSrv.addProdutoMaterial(produtoMaterial)
      .subscribe(
        produtoMaterial => {
          this.snackBar.open("Sucesso!", "Material Adicionado", { duration: 4000 });
          this.materiaisDoProduto.push(m);
          this.selectedMaterialDoProduto = this.materiaisDoProduto.length - 1;
        },
        erro => {
          this.snackBar.open("Erro!", erro.error, { duration: 4000 });
          console.log(erro);
        });
  }

  removeMaterial(): void {
    if (this.selectedMaterialDoProduto == null) {
      this.snackBar.open("Selecione o material do produto", "", { duration: 4000 });
      return;
    }

    if (this.materiaisDoProduto.length < 2) {
      this.snackBar.open("Não é possível remover o ultimo material do produto", "", { duration: 4000 });
      return;
    }

    let produtoMaterial: ProdutoMaterial = new ProdutoMaterial(this.selectedProduto.id, this.materiaisDoProduto[this.selectedMaterialDoProduto].id);

    this.produtoMaterialSrv.deleteProdutoMaterial(produtoMaterial.produtoId, produtoMaterial.materialId).subscribe(
      pm => {
        this.materiaisDoProduto.splice(this.selectedMaterialDoProduto, 1);
        if (this.materiaisDoProduto.length == 0) {
          this.selectedMaterialDoProduto = null;
        } else {
          this.selectedMaterialDoProduto = 0;
        }
        this.snackBar.open("Sucesso!", "Material Removido", { duration: 4000 });
      },
      erro => {
        this.snackBar.open("Erro!", erro.error, { duration: 4000 });
        console.log(erro);
      });


  }

  addAgregacao(): void {

    if (this.selectedProduto == null) {
      this.snackBar.open("Selecione o Produto Pai", "", { duration: 4000 });
      return;
    }
    if (this.selectedProdutoExistente == null) {
      this.snackBar.open("Selecione o Produto", "", { duration: 4000 });
      return;
    }

    let p: Produto = this.allProdutos[this.selectedProdutoExistente];

    let tipo: number = p.tipo;

    if (this.existeNoArray(p, this.listaProdutosFilho)) {
      return;
    }
    if (this.selectedProduto.tipo != this.listaTiposProduto[TipoProduto.Armario] && this.selectedProduto.tipo != this.listaTiposProduto[TipoProduto.Modulo]) {
      this.snackBar.open("Um Produto deste tipo não pode conter Produtos Filho", "", { duration: 4000 });
      return;
    }

    if (this.selectedProduto.tipo == this.listaTiposProduto[TipoProduto.Armario] && p.tipo != this.listaTiposProduto[TipoProduto.Modulo]) {
      this.snackBar.open("Um Produto do tipo Armario só pode conter Módulos", "", { duration: 4000 });
      return;
    }

    if (this.selectedProduto.tipo == this.listaTiposProduto[TipoProduto.Modulo] && (p.tipo == this.listaTiposProduto[TipoProduto.Armario] || p.tipo == this.listaTiposProduto[TipoProduto.Modulo])) {
      this.snackBar.open("Um Produto do tipo Módulo não pode conter um Armário ou Módulo", "", { duration: 4000 });
      return;
    }

    let minFilho: number = Math.min(...this.allProdutos[this.selectedProdutoExistente].altura.listaValores);
    let maxPai: number = Math.max(...this.selectedProduto.altura.listaValores);
    if (minFilho > maxPai) {
      this.snackBar.open("A altura do produto filho (" + minFilho + "m) não cabe no produto pai (" + maxPai + "m)", "", { duration: 4000 });
      return;
    }

    minFilho = Math.min(...this.allProdutos[this.selectedProdutoExistente].largura.listaValores);
    maxPai = Math.max(...this.selectedProduto.largura.listaValores);
    if (minFilho > maxPai) {
      this.snackBar.open("A largura do produto filho (" + minFilho + "m) não cabe no produto pai (" + maxPai + "m)", "", { duration: 4000 });
      return;
    }

    minFilho = Math.min(...this.allProdutos[this.selectedProdutoExistente].profundidade.listaValores);
    maxPai = Math.max(...this.selectedProduto.profundidade.listaValores);
    if (minFilho > maxPai) {
      this.snackBar.open("A profundidade do produto filho (" + minFilho + "m) não cabe no produto pai (" + maxPai + "m)", "", { duration: 4000 });
      return;
    }

    let agregacao: Agregacao = new Agregacao(this.selectedProduto.id, p.id, this.tipoAgregacao);

    this.agregacaoSrv.addagregacao(agregacao)
      .subscribe(
        agreg => {
          this.listaProdutosFilho.push(p);
          this.listaTiposDeAgregacao.push(agregacao.confirmation);
          this.selectedProdutoFilho = 0;
          this.snackBar.open("Sucesso!", "Agregação criada", { duration: 4000 });
        },
        erro => {
          this.snackBar.open("Erro!", erro.error, { duration: 4000 });
          console.log(erro);
        });

  }

  removeAgregacao(): void {

    if (this.selectedProduto == null) {
      this.snackBar.open("Selecione Produto Pai", "", { duration: 4000 });
      return;
    }
    if (this.selectedProdutoFilho == null) {
      this.snackBar.open("Selecione Produto Filho", "", { duration: 4000 });
      return;
    }

    this.agregacaoSrv.deleteAgregacao(this.selectedProduto.id, this.listaProdutosFilho[this.selectedProdutoFilho].id)
      .subscribe(
        agreg => {
          this.listaProdutosFilho.splice(this.selectedProdutoFilho, 1);
          this.listaTiposDeAgregacao.splice(this.selectedProdutoFilho, 1);
          if (this.listaProdutosFilho.length == 0) {
            this.selectedProdutoFilho = null;
            this.listaRestricoesDeAgregacao = null;
          } else {
            this.selectedProdutoFilho = 0;
          }
          this.snackBar.open("Sucesso!", "Agregação eliminada", { duration: 4000 });
        },
        erro => {
          this.snackBar.open("Erro!", erro.error, { duration: 4000 });
          console.log(erro);
        });

  }

  addRestricao() {

    if (this.selectedProduto == null) {
      this.snackBar.open("Selecione o Produto Pai", "", { duration: 4000 });
      return;
    }

    if (this.selectedProdutoFilho == null) {
      this.snackBar.open("Selecione o Produto Filho", "", { duration: 4000 });
      return;
    }

    let params: string;
    if (this.selectedTipoRestricao == 0) {
      if (this.volumeMinimo == null || this.volumeMaximo == null) {
        this.snackBar.open("Preencha os campos de volume mínimo e máximo", "", { duration: 4000 });
        return;
      }

      if (this.volumeMinimo < 0 || this.volumeMinimo > 100 || this.volumeMaximo < 0 || this.volumeMaximo > 100) {
        this.snackBar.open("Os valores de volume têm de estar entre 0 e 100", "", { duration: 4000 });
        return;
      }

      if (Number(this.volumeMinimo) > Number(this.volumeMaximo)) {
        this.snackBar.open("O volume mínimo tem de ser menor ou igual ao máximo", "", { duration: 4000 });
        return;
      }

      params = this.volumeMinimo + ";" + this.volumeMaximo;
    } else {
      params = "";
    }

    let produtoProdutoIdPai: number = this.selectedProduto.id;
    let produtoProdutoIdFilho: number = this.listaProdutosFilho[this.selectedProdutoFilho].id;

    let tipoRes = this.listaTiposRestricao[this.selectedTipoRestricao];

    let restricao: Restricao = new Restricao(tipoRes, params, produtoProdutoIdPai, produtoProdutoIdFilho);

    this.restricaoSrv.addRestricao(restricao)
      .subscribe(data => {
        if (this.listaRestricoesDeAgregacao == null) {
          this.listaRestricoesDeAgregacao = [];
        }
        this.listaRestricoesDeAgregacao.push(data);
        this.selectedRestricao = 0;
        this.snackBar.open("Sucesso!", "Restricao Adicionada", { duration: 4000 });
      },
        erro => {
          this.snackBar.open("Erro!", erro.error, { duration: 4000 });
          console.log(erro);
        });
  }

  removeRestricao() {

    if (this.selectedProduto == null) {
      this.snackBar.open("Selecione Produto Pai", "", { duration: 4000 });
      return;
    }
    if (this.selectedProdutoFilho == null) {
      this.snackBar.open("Selecione Produto Filho", "", { duration: 4000 });
      return;
    }

    if (this.selectedRestricao == null) {
      this.snackBar.open("Selecione uma Restrição", "", { duration: 4000 });
      return;
    }

    this.restricaoSrv.deleteRestricao(this.listaRestricoesDeAgregacao[this.selectedRestricao].id)
      .subscribe(data => {
        this.listaRestricoesDeAgregacao.splice(this.selectedRestricao, 1);
        if (this.listaRestricoesDeAgregacao.length == 0) {
          this.selectedRestricao = null;
        } else {
          this.selectedRestricao = 0;
        }
        this.snackBar.open("Sucesso!", "Restricao Removida", { duration: 4000 });
      },
        erro => {
          this.snackBar.open("Erro!", erro.error, { duration: 4000 });
          console.log(erro);
        });
  }

  existeNoArray(objeto, array): boolean {
    var x;
    for (x in array) {
      if (array[x] === objeto) {
        return true;
      }
    }

    return false;
  }

  removeValor1(): void {
    let valor = this.valorAlturaSelecionado;
    for (let i = 0; i < this.valoresAltura.length; i++) {
      if (this.valoresAltura[i] == valor) {
        this.valoresAltura.splice(i, 1);
        if (this.valoresAltura.length == 0) {
          this.valorAlturaSelecionado = null;
        } else {
          this.valorAlturaSelecionado = this.valoresAltura[0];
        }
        return;
      }
    }
  }

  removeValor2(): void {
    let valor = this.valorLarguraSelecionado;
    for (let i = 0; i < this.valoresLargura.length; i++) {
      if (this.valoresLargura[i] == valor) {
        this.valoresLargura.splice(i, 1);
        if (this.valoresLargura.length == 0) {
          this.valorLarguraSelecionado = null;
        } else {
          this.valorLarguraSelecionado = this.valoresLargura[0];
        }
        return;
      }
    }
  }

  removeValor3(): void {
    let valor = this.valorProfundidadeSelecionado;
    for (let i = 0; i < this.valoresProfundidade.length; i++) {
      if (this.valoresProfundidade[i] == valor) {
        this.valoresProfundidade.splice(i, 1);
        if (this.valoresProfundidade.length == 0) {
          this.valorProfundidadeSelecionado = null;
        } else {
          this.valorProfundidadeSelecionado = this.valoresProfundidade[0];
        }
        return;
      }
    }
  }

  clearValoresAltura(): void {
    this.valoresAltura = [];
    this.valorAlturaSelecionado = 0;
  }

  clearValoresLargura(): void {
    this.valoresLargura = [];
    this.valorLarguraSelecionado = 0;
  }

  clearValoresProfundidade(): void {
    this.valoresProfundidade = [];
    this.valorProfundidadeSelecionado = 0;
  }

  clearTabAgregacoes(): void {
    this.selectedProduto = null;
    this.selectedProdutoExistente = 0;
    this.selectedProdutoFilho = null;
    this.listaProdutosFilho = [];
    this.listaTiposDeAgregacao = [];
    this.tipoAgregacao = false;

    this.selectedTipoRestricao = 0;
    this.selectedRestricao = null;
    this.volumeMinimo = null;
    this.volumeMaximo = null;
    this.listaRestricoesDeAgregacao = [];

  }

  clearVariaveis(): void {

    this.clearValoresAltura();
    this.clearValoresLargura();
    this.clearValoresProfundidade();
    this.nomeProduto = null;
    this.tipoValor1 = 0;
    this.tipoValor2 = 0;
    this.tipoValor3 = 0;
    this.nomeProduto = null;
    this.campoAltura = null;
    this.campoLargura = null;
    this.campoProfundidade = null;
    this.selectedTipoProduto = 0;
    this.valorAlturaSelecionado = 0;
    this.valorLarguraSelecionado = 0;
    this.valorProfundidadeSelecionado = 0;
    this.selectedMaterialExistente = 0;
    this.selectedMaterialDoProduto = null;
    this.materiaisDoProduto = [];
    this.selectedCategoria = 0;
    this.clearTabAgregacoes();

  }


  criarProduto(): void {
    let nome = this.nomeProduto;
    let categoria = this.allCategorias[this.selectedCategoria.valueOf()];

    if (!nome) {
      this.snackBar.open("Erro!", "Nome Vazio", { duration: 4000 });
      return;
    }
    if (categoria == null) {
      this.snackBar.open("Erro!", "Escolha uma Categoria", { duration: 4000 });
      return;
    }

    if (this.materiaisDoProduto.length == 0) {
      this.snackBar.open("Erro!", "O produto precisa de um material", { duration: 4000 });
      return;
    }

    if (this.valoresAltura.length < 1) {
      this.snackBar.open("Erro!", "A altura tem de ter pelo menos um valor", { duration: 4000 });
      return;
    } else if (this.tipoValor1 == 1 && this.valoresAltura.length != 2) {
      this.snackBar.open("Erro!", "A altura continua tem de ter dois valores", { duration: 4000 });
      return;
    }

    if (this.valoresLargura.length < 1) {
      this.snackBar.open("Erro!", "A largura tem de ter pelo menos um valor", { duration: 4000 });
      return;
    } else if (this.tipoValor2 == 1 && this.valoresLargura.length != 2) {
      this.snackBar.open("Erro!", "A largura continua tem de ter dois valores", { duration: 4000 });
      return;
    }

    if (this.valoresProfundidade.length < 1) {
      this.snackBar.open("Erro!", "A profundidade tem de ter pelo menos um valor", { duration: 4000 });
      return;
    } else if (this.tipoValor3 == 1 && this.valoresProfundidade.length != 2) {
      this.snackBar.open("Erro!", "A profundidade continua tem de ter dois valores", { duration: 4000 });
      return;
    }


    nome = nome.trim();
    let altura: Dimensao = new Dimensao(this.valoresAltura, this.tipoValor1, "m");
    let largura: Dimensao = new Dimensao(this.valoresLargura, this.tipoValor2, "m");
    let profundidade: Dimensao = new Dimensao(this.valoresProfundidade, this.tipoValor3, "m");

    let produto: Produto = new Produto(nome, categoria, altura, largura, profundidade, this.listaTiposProduto[this.selectedTipoProduto]);


    this.produtoSrv.addProduto(produto)
      .subscribe(produto => {
        this.allProdutos.push(produto);
        this.snackBar.open("Sucesso!", "Produto criado", { duration: 4000 });
        for (let i in this.materiaisDoProduto) {
          let produtoMaterial: ProdutoMaterial = new ProdutoMaterial(produto.id, this.materiaisDoProduto[i].id);
          this.produtoMaterialSrv.addProdutoMaterial(produtoMaterial)
            .subscribe(produtoMaterial => {
            },
              erro => {
                this.snackBar.open("Erro!", erro.error, { duration: 4000 });
                console.log(erro);
              })
        }
      },
        erro => {
          this.snackBar.open("Erro!", erro.error, { duration: 4000 });
          console.log(erro);
        });
  }

  compareNumbers(num1: number, num2: number): number {
    return num1 - num2;
  }

  editarProduto(): void {

    if (this.selectedProduto == null) {
      this.snackBar.open("Erro!", "Selecione um produto", { duration: 4000 });
      return;
    }

    let nome = this.nomeProduto;
    let categoria = this.allCategorias[this.selectedCategoria.valueOf()];

    if (!nome) {
      this.snackBar.open("Erro!", "Nome Vazio", { duration: 4000 });
      return;
    }
    if (categoria == null) {
      this.snackBar.open("Erro!", "Escolha uma Categoria", { duration: 4000 });
      return;
    }

    if (this.materiaisDoProduto.length == 0) {
      this.snackBar.open("Erro!", "O produto precisa de um material", { duration: 4000 });
      return;
    }

    if (this.valoresAltura.length < 1) {
      this.snackBar.open("Erro!", "A altura tem de ter pelo menos um valor", { duration: 4000 });
      return;
    } else if (this.tipoValor1 == 1 && this.valoresAltura.length != 2) {
      this.snackBar.open("Erro!", "A altura continua tem de ter dois valores", { duration: 4000 });
      return;
    }

    if (this.valoresLargura.length < 1) {
      this.snackBar.open("Erro!", "A largura tem de ter pelo menos um valor", { duration: 4000 });
      return;
    } else if (this.tipoValor2 == 1 && this.valoresLargura.length != 2) {
      this.snackBar.open("Erro!", "A largura continua tem de ter dois valores", { duration: 4000 });
      return;
    }

    if (this.valoresProfundidade.length < 1) {
      this.snackBar.open("Erro!", "A profundidade tem de ter pelo menos um valor", { duration: 4000 });
      return;
    } else if (this.tipoValor3 == 1 && this.valoresProfundidade.length != 2) {
      this.snackBar.open("Erro!", "A profundidade continua tem de ter dois valores", { duration: 4000 });
      return;
    }

    if (this.selectedProduto.tipo == this.listaTiposProduto[TipoProduto.Armario]) {
      this.selectedTipoProduto = TipoProduto.Armario;
    }
    if (this.selectedProduto.tipo == this.listaTiposProduto[TipoProduto.Modulo]) {
      this.selectedTipoProduto = TipoProduto.Modulo;
    }

    nome = nome.trim();
    let altura: Dimensao = new Dimensao(this.valoresAltura, this.tipoValor1, "m");
    let largura: Dimensao = new Dimensao(this.valoresLargura, this.tipoValor2, "m");
    let profundidade: Dimensao = new Dimensao(this.valoresProfundidade, this.tipoValor3, "m");

    let produto: Produto = new Produto(nome, categoria, altura, largura, profundidade, this.listaTiposProduto[this.selectedTipoProduto]);
    produto.id = this.selectedProduto.id;

    this.produtoSrv.updateProduto(this.selectedProduto.id, produto)
      .subscribe(
        prod => {
          this.snackBar.open("Sucesso!", "Produto editado", { duration: 4000 });

          let index: number = this.allProdutos.indexOf(this.selectedProduto);

          this.allProdutos.splice(index, 1);
          this.selectedProduto = prod;
          this.allProdutos.splice(index, 0, prod);
        },
        erro => {
          this.snackBar.open("Erro!", erro.error, { duration: 4000 });
          console.log(erro);
        });
  }

  deleteProdutoHTML(id: number): void {
    this.restricaoSrv.deleteRestricoesDeProduto(id).subscribe(
      data => {
        this.produtoSrv.deleteProduto(id).subscribe(
          data => {
            this.allProdutos = this.allProdutos.filter(h => h.id != id);
            this.snackBar.open("Sucesso!", "Produto eliminado", { duration: 4000 });
          },
          erro => {
            this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
          });
      },
      erro => {
        this.snackBar.open("Erro!", erro.error, { duration: 4000 });
        console.log(erro);
      });


  }


  selecionarProdutoAgregacoes(prod: Produto) {

    this.clearTabAgregacoes();
    this.selectedProduto = prod;
    this.agregacaoSrv.getAgregacaoDePai(this.selectedProduto.id).subscribe(
      agregacoes => {
        this.selectedProdutoFilho = 0;
        let length = agregacoes.length;
        if (length == 0) {
          this.listaProdutosFilho = [];
          this.selectedProdutoFilho = null;
          this.selectedRestricao = null;
        } else {
          for (let i = 0; i < length; i++) {
            let a: Agregacao = agregacoes.pop();
            this.listaProdutosFilho.push(this.obterProduto(a.produtoIdFilho));
            this.listaTiposDeAgregacao.push(a.confirmation);
          }
          this.selectedProdutoFilho = 0;
          this.selecionarProdutoFilhoAgregacoes();
        }
      },
      erro => {
        this.snackBar.open("Erro!", erro.error, { duration: 4000 });
        console.log(erro);
      })

  }

  selecionarProdutoFilhoAgregacoes() {

    this.restricaoSrv.getRestricaoId(this.selectedProduto.id, this.listaProdutosFilho[this.selectedProdutoFilho].id).subscribe(
      restricoes => {
        let length = restricoes.length;
        if (length == 0) {
          this.listaRestricoesDeAgregacao = null;
          this.selectedRestricao = null;
        } else {
          for (let i = 0; i < length; i++) {
            this.listaRestricoesDeAgregacao.push(restricoes[i]);
          }
          this.selectedRestricao = 0;
        }
      },
      erro => {
        this.snackBar.open("Erro!", erro.error, { duration: 4000 });
        console.log(erro);
      })

  }

  limparCamposEditarButton() {
    this.selecionarProdutoEditar(this.selectedProduto);
  }

  selecionarProdutoEditar(prod: Produto) {

    this.clearVariaveis();
    if (prod == null)
      return;

    this.selectedProduto = prod;
    this.nomeProduto = prod.nome;

    this.selectedTipoProduto = this.listaTiposProduto.indexOf(prod.tipo);

    this.selectedCategoria = this.indexDaCategoria(prod.categoria);

    this.materiaisDoProduto = [];
    this.selectedMaterialDoProduto = 0;

    this.produtoMaterialSrv.getProdutoMaterialDeProduto(prod.id).subscribe(
      produtoProdutos => {
        let list: ProdutoMaterial[] = produtoProdutos;
        for (let i = 0; i < list.length; i++) {
          this.materiaisDoProduto.push(this.obterMaterial(list[i].materialId));
        }
      },
      erro => {
        this.snackBar.open("Erro!", erro.error, { duration: 4000 });
        console.log(erro);
      })


    this.valoresAltura = prod.altura.listaValores.slice(0);
    this.valoresAltura.sort((a, b) => a - b);
    this.tipoValor1 = this.listaTiposDimensao.indexOf(prod.altura.tipo);
    this.valorAlturaSelecionado = this.valoresAltura[0];

    this.valoresLargura = prod.largura.listaValores.slice(0);
    this.valoresLargura.sort((a, b) => a - b);
    this.tipoValor2 = this.listaTiposDimensao.indexOf(prod.largura.tipo);
    this.valorLarguraSelecionado = this.valoresLargura[0];

    this.valoresProfundidade = prod.profundidade.listaValores.slice(0);
    this.valoresProfundidade.sort((a, b) => a - b);
    this.tipoValor3 = this.listaTiposDimensao.indexOf(prod.profundidade.tipo);
    this.valorProfundidadeSelecionado = this.valoresProfundidade[0];

  }

  obterMaterial(id: number): Material {
    for (let i = 0; i < this.allMateriais.length; i++) {
      let material: Material = this.allMateriais[i];
      if (material.id == id) {
        return material;
      }
    }
    return null;
  }


  obterProduto(id: number): Produto {
    for (let i = 0; i < this.allProdutos.length; i++) {
      let produto: Produto = this.allProdutos[i];
      if (produto.id == id) {
        return produto;
      }
    }
    return null;
  }

  indexDaCategoria(cat: Categoria): number {
    for (let i = 0; i < this.allCategorias.length; i++) {
      if (this.allCategorias[i].id == cat.id) {
        return i;
      }
    }
    return 0;
  }

}
