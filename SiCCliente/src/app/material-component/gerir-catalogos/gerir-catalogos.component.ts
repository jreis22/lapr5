import { Component, OnInit } from '@angular/core';
import { Catalogo } from '../../gestor/catalogo/catalogo';
import { CatalogoService } from '../../gestor/catalogo/catalogo.service';
import { Produto } from '../../gestor/produto/produto';
import { ProdutoService } from '../../gestor/produto/produto.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gerir-catalogos',
  templateUrl: './gerir-catalogos.component.html',
  styleUrls: ['./gerir-catalogos.component.css']
})
export class GerirCatalogosComponent implements OnInit {

  flagServer: boolean = false;

  statusMessage: string;

  //lists
  allCatalogos: Catalogo[];
  produtosCatalogo: Produto[];
  allProdutos: Produto[];
  produtosSelecionados: Produto[];
  //view toggles
  criarCatalogo: boolean = false;
  editarCatalogo: boolean = false;
  adicionaProduto: boolean = false;
  listarCatalogos: boolean = false;

  //update
  selectedCatalogo: Catalogo = null;
  newCatalogo: Catalogo = null;
  selectedProduto: Produto = null;
  selectedProd: Produto = null;
  nomeCatalogo: string = "";
  nomeUpdate: string = "";

  disabledProdutosList: boolean = false;
  produtoTextEliminar = "Escolha um produto";
  disableEliminar: boolean = true;
  adicionarFormGroup: FormGroup;
  disableAdicionar: boolean = true;
  produtoTextAdicionar = "Escolha um produto";

  constructor(private catalogoSrv: CatalogoService, private produtoSrv: ProdutoService, private _formBuilder: FormBuilder, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.adicionarFormGroup = this._formBuilder.group({
      adicionarCtrl: ['', Validators.required]
    });
    this.getCatalogos();
    this.getProdutos();
  }

  clear(): void {
    this.nomeCatalogo = '';
    this.nomeUpdate = '';
    this.selectedCatalogo = null;
    this.selectedProduto = null;
    this.newCatalogo = null;
    this.selectedProd = null;
    this.produtosCatalogo = [];
  }

  private getCatalogos(): void {
    this.catalogoSrv.getCatalogos().subscribe(catalogos => {
      this.allCatalogos = catalogos;
    },
      error => {
        this.flagServer = true;
        this.statusMessage = "Error: Service Unavailable";
      });
  }

  private getProdutos(): void {
    this.produtoSrv.getProdutos().subscribe(produtos => {
      this.allProdutos = produtos;
    },
      error => {
        this.flagServer = true;
        this.statusMessage = "Error: Service Unavailable";
      });
  }

  private getProdutosCatalogo(): void {
    var id = this.selectedCatalogo.id;
    this.catalogoSrv.getProdutos(id).subscribe(produtos => {
      this.produtosCatalogo = produtos;
    },
      error => { this.statusMessage = "Error: Service Unavailable"; });
  }

  selecionarCatalogo(cat: Catalogo) {
    this.nomeUpdate = cat.nome;
    this.getProdutosCatalogo();
  }

  selecionarProduto(prod: Produto) {
    this.selectedProduto = prod;
  }

  selectProduto(prod: Produto) {
    this.selectedProd = prod;
  }

  updateCatalogoHTML() {
    if (this.selectedCatalogo == null) {
      this.snackBar.open("Erro!", "Selecione um Catálogo", { duration: 4000 });
      return;
    }

    var catalogoFinal = new Catalogo(this.selectedCatalogo.nome);
    catalogoFinal.id = this.selectedCatalogo.id;
    catalogoFinal.nome = this.selectedCatalogo.nome;

    if (!catalogoFinal.nome) {
      this.snackBar.open("Erro!", "Insira um nome", { duration: 4000 });
      return;
    }

    this.catalogoSrv.updateCatalogo(this.selectedCatalogo.id, catalogoFinal)
      .subscribe(catalogo => {
        this.snackBar.open("Sucesso!", "Catálogo Editado", { duration: 4000 });
        this.getCatalogos();
        this.nomeUpdate = '';
        this.selectedCatalogo = null;
      },
        erro => {
          this.snackBar.open("Erro!", "Ocurreu um erro", { duration: 4000 });
          console.log(erro);
        });
  }

  addCatalogo(): void {
    let nome = this.nomeCatalogo;
    nome = nome.trim();

    if (!nome) {
      this.snackBar.open("Erro!", "Insira um nome", { duration: 4000 });
      return;
    }
    if (!nome) {
      return;
    }

    let catalogo: Catalogo = new Catalogo(nome);

    this.catalogoSrv.addCatalogo(catalogo)
      .subscribe(catalogo => {
        this.allCatalogos.push(catalogo);
        this.snackBar.open("Sucesso!", "Catálogo Adicionado", { duration: 4000 });
        this.getCatalogos();
        //this.nomeCatalogo = '';
        this.newCatalogo = catalogo;
      },
        erro => {
          this.snackBar.open("Erro!", "Ocurreu um erro", { duration: 4000 });
          console.log(erro);
        }
      );
  }

  addProduto(): void {
    if (this.newCatalogo == null) {
      this.snackBar.open("Erro!", "Selecione um catálogo", { duration: 4000 });
      return;
    }
    if (this.selectedProd == null) {
      this.snackBar.open("Erro!", "Selecione um produto", { duration: 4000 });
      return;
    }
    //this.produtosSelecionados[0] = this.selectedProd;
    this.catalogoSrv.adicionarProduto(this.newCatalogo.id, this.selectedProd.id).subscribe();
    this.snackBar.open("", "Produto " + this.selectedProd.nome + " adicionado", { duration: 4000 });
  }

  deleteCatalogo(): void {
    if (this.selectedCatalogo == null) {
      this.snackBar.open("Erro!", "Selecione um catálogo", { duration: 4000 });
      return;
    }

    this.catalogoSrv.deleteCatalogo(this.selectedCatalogo.id).subscribe(catalogo => {
      console.log(catalogo);
      this.allCatalogos = this.allCatalogos.filter(h => h.id != this.selectedCatalogo.id);
      this.snackBar.open("Catálogo " + this.selectedCatalogo.nome + " eliminado");
      this.getCatalogos();
      this.nomeUpdate = '';
    },
      error => {
        this.snackBar.open("Erro!", "Ocurreu um erro", { duration: 4000 });
        console.log(error);
      }
    );
  }


  /*botaoEliminarEvent() {
     if (this.selectedProduto == null) {
      this.snackBar.open("Erro!", "Selecione um produto", { duration: 4000 });
      return;
    }
    this.deleteProduto();
  }*/

  botaoAdicionarEvent() {
    if (this.selectedProduto == null) {
      this.snackBar.open("Erro!", "Selecione um produto", { duration: 4000 });
      return;
    }
    this.adicionarProduto();
  }

  deleteProduto(): void {
    this.catalogoSrv.deleteProduto(this.selectedCatalogo.id, this.selectedProduto.id).subscribe();
    this.snackBar.open("", "Produto " + this.selectedProduto.nome + " eliminado", { duration: 4000 });
    this.getProdutosCatalogo();
    this.resetEliminar();
  }

  private adicionarProduto(): void {
    this.catalogoSrv.adicionarProduto(this.selectedCatalogo.id, this.selectedProduto.id).subscribe();
    this.snackBar.open("", "Produto " + this.selectedProduto.nome + " adicionado", { duration: 4000 });
    this.getProdutosCatalogo();
    this.resetAdicionar();
  }

  /*produtoEliminarEvent(produto: Produto) {
    this.selectedProduto = produto;
    this.catalogoSrv.deleteProduto(this.selectedCatalogo.id,produto.id).subscribe();
    alert("Produto " + this.selectedProduto.nome + " eliminado!");
    this.getProdutosCatalogo();
  }*/

  /*produtoAdicionarEvent(produto: Produto){
    this.selectedProduto = produto;
    this.produtoSrv.addProduto(produto).subscribe();
  }*/

  /*lockEliminar() {
    this.disableEliminar = true;
  }

  unlockEliminar() {
    this.disableEliminar = false;
  }

  lockAdicionar(){
    this.disableAdicionar = true;
  }

  unlockAdicionar(){
    this.disableAdicionar = false;
  }*/

  resetEliminar() {
    this.produtoTextEliminar = "Escolha um produto";
    this.selectedProduto = null;
    this.getProdutosCatalogo();
    //this.lockEliminar();
  }

  resetAdicionar() {
    this.produtoTextAdicionar = "Escolha um produto";
    this.selectedProduto = null;
    this.getProdutosCatalogo();
    //this.lockAdicionar();
  }

}
