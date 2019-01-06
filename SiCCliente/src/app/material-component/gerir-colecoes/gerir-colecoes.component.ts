import { Component, OnInit } from '@angular/core';
import { Colecao } from '../../gestor/colecao/colecao';
import { ColecaoService } from '../../gestor/colecao/colecao.service';
import { Produto } from '../../gestor/produto/produto';
import { ProdutoService } from '../../gestor/produto/produto.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gerir-colecoes',
  templateUrl: './gerir-colecoes.component.html',
  styleUrls: ['./gerir-colecoes.component.css']
})
export class GerirColecoesComponent implements OnInit {

  flagServer: boolean = false;

  statusMessage: string;

  //lists
  allColecoes: Colecao[];
  allProdutos: Produto[];
  produtosColecao: Produto[];
  produtosSelecionados : Produto[];

  //view toggles
  criarColecao: boolean = false;
  editarColecao: boolean = false;
  adicionaProduto: boolean = false;
  listarColecoes: boolean = false;

  //update
  selectedColecao: Colecao = null;
  newColecao: Colecao = null;
  selectedProduto: Produto = null;
  selectedProd: Produto = null;
  nomeColecao: string = "";
  nomeUpdate: string = "";


  disabledProdutosList: boolean = false;
  produtoTextEliminar = "Escolha um produto";
  disableEliminar: boolean = true;
  adicionarFormGroup: FormGroup;
  disableAdicionar: boolean = true;
  produtoTextAdicionar = "Escolha um produto";

  constructor(private colecaoSrv: ColecaoService, private produtoSrv: ProdutoService, private _formBuilder: FormBuilder, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.adicionarFormGroup = this._formBuilder.group({
      adicionarCtrl: ['', Validators.required]
    });
    this.getColecoes();
    this.getProdutos();
  }

  clear(): void {
    this.nomeColecao = '';
    this.nomeUpdate = '';
    this.selectedColecao = null;
    this.selectedProduto = null;
    this.newColecao = null;
    this.selectedProd = null;
    this.produtosColecao = [];
  }

  private getColecoes(): void {
    this.colecaoSrv.getColecoes().subscribe(colecoes => {
      this.allColecoes = colecoes;
    },
      error => { 
        this.flagServer=true;
        this.statusMessage = "Error: Service Unavailable"; });
  }

  private getProdutos(): void {
    this.produtoSrv.getProdutos().subscribe(produtos => {
      this.allProdutos = produtos;
    },
      error => { 
        this.flagServer=true;
        this.statusMessage = "Error: Service Unavailable"; });
  }

  private getProdutosColecao(): void {
    var id = this.selectedColecao.id;
    this.colecaoSrv.getProdutos(id).subscribe(produtos => {
      this.produtosColecao = produtos;
    },
      error => { this.statusMessage = "Error: Service Unavailable"; });
  }


  selecionarColecao(col: Colecao) {
    this.nomeUpdate = col.nome;
    this.getProdutosColecao();
  }

  selecionarProduto(prod: Produto) {
    this.selectedProduto = prod;
  }

  selectProduto(prod: Produto) {
    this.selectedProd = prod;
  }
 

  updateColecaoHTML() {
    if (this.selectedColecao == null) {
      this.snackBar.open("Erro!", "Selecione um Colecao", { duration: 4000 });
      return;
    }

    var colecaoFinal = new Colecao(this.selectedColecao.nome);
    colecaoFinal.id = this.selectedColecao.id;
    colecaoFinal.nome = this.selectedColecao.nome;

    if (!colecaoFinal.nome) {
      this.snackBar.open("Erro!", "Insira um nome", { duration: 4000 });
      return;
    }

    this.colecaoSrv.updateColecao(this.selectedColecao.id, colecaoFinal)
      .subscribe(colecao => {
        this.snackBar.open("Sucesso!", "Coleção Editada", { duration: 4000 });
        this.getColecoes();
        this.nomeUpdate = '';
        this.selectedColecao = null;
      },
        erro => {
          this.snackBar.open("Erro!", "Ocurreu um erro", { duration: 4000 });
          console.log(erro);
        });
  }

  addColecao(): void {
    let nome = this.nomeColecao;
    nome = nome.trim();

    if (!nome) {
      this.snackBar.open("Erro!", "Insira um nome", { duration: 4000 });
      return;
    }
    if (!nome) {
      return;
    }

    let colecao: Colecao = new Colecao(nome);

    this.colecaoSrv.addColecao(colecao)
      .subscribe(colecao => {
        this.allColecoes.push(colecao);
        this.snackBar.open("Sucesso!", "Colecção Adicionada", { duration: 4000 });
        this.getColecoes();
        this.newColecao = colecao;
      },
        erro => {
          this.snackBar.open("Erro!", "Ocurreu um erro", { duration: 4000 });
          console.log(erro);
        }
      );
  }

  addProduto(): void {
    if (this.newColecao == null) {
      this.snackBar.open("Erro!", "C", { duration: 4000 });
      return;
    }
    if (this.selectedProd == null) {
      this.snackBar.open("Erro!", "Selecione um produto", { duration: 4000 });
      return;
    }
    //this.produtosSelecionados[0] = this.selectedProd;
    this.colecaoSrv.adicionarProduto(this.newColecao.id, this.selectedProd.id).subscribe();
    this.snackBar.open("", "Produto " + this.selectedProd.nome + " adicionado", { duration: 4000 });
  }

  deleteColecao(): void {
    if (this.selectedColecao == null) {
      this.snackBar.open("Erro!", "Selecione uma Coleção", { duration: 4000 });
      return;
    }
    console.log(this.selectedColecao);

    this.colecaoSrv.deleteColecao(this.selectedColecao.id).subscribe();
    this.getColecoes();
    this.nomeUpdate = '';
  }
  
  botaoAdicionarEvent() {
    if (this.selectedProduto == null) {
      this.snackBar.open("Erro!", "Selecione um produto", { duration: 4000 });
      return;
    }
    this.adicionarProduto();
  }

  deleteProduto(): void {
    this.colecaoSrv.deleteProduto(this.selectedColecao.id, this.selectedProduto.id).subscribe();
    this.snackBar.open("", "Produto " + this.selectedProduto.nome + " eliminado", { duration: 4000 });
    this.getProdutosColecao();
    this.resetEliminar();
  }

  private adicionarProduto(): void {
    this.colecaoSrv.adicionarProduto(this.selectedColecao.id, this.selectedProduto.id).subscribe();
    this.snackBar.open("", "Produto " + this.selectedProduto.nome + " adicionado", { duration: 4000 });
    this.getProdutosColecao();
    this.resetAdicionar();
  }

  resetEliminar() {
    this.produtoTextEliminar = "Escolha um produto";
    this.selectedProduto = null;
    this.getProdutosColecao();
    //this.lockEliminar();
  }

  resetAdicionar() {
    this.produtoTextAdicionar = "Escolha um produto";
    this.selectedProduto = null;
    this.getProdutosColecao();
    //this.lockAdicionar();
  }
}
