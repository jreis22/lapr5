import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import * as Configurador from '../../sic-configurador/sic-configurador/public/js/index'
import { Material } from '../../gestor/material/material';
import { MaterialService } from '../../gestor/material/material.service';
import * as Constants from '../../sic-configurador/sic-configurador/public/js/constants';
import { Acabamento } from '../../gestor/acabamento/acabamento';
import { Produto } from '../../gestor/produto/produto';
import { ProdutoService } from '../../gestor/produto/produto.service';
import { ProdutoItem } from '../../cliente/item/item';
import { ItemService } from '../../cliente/item/item.service';
import { Encomenda } from '../../cliente/encomenda/encomenda';
import { EncomendaService } from '../../cliente/encomenda/encomenda.service';
import { ApiCheckService } from '../../api-check.service';
import { TipoProduto } from '../../gestor/produto/tipo-produto';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { IsLoggedIn } from '../../isLoggedIn';
import { StarterService } from '../../starter/starter.service';

const VALORES_DISCRETOS = "Discretos";
const VALORES_CONTINUOS = "Continuos";

@Component({
  selector: 'app-configurador',
  templateUrl: './configurador.component.html',
  styleUrls: ['./configurador.component.css']
})
export class ConfiguradorComponent implements OnInit, AfterViewInit {

  armarios: Produto[];
  armarioSelecionado: Produto;
  armario: ProdutoItem = new ProdutoItem();
  
  modulosArmarioSelecionado: Produto[];
  modulo: ProdutoItem = new ProdutoItem();
  modulosAdicionados: ProdutoItem[] = [];
  moduloSelecionado: Produto;
  moduloAdicionadoSelecionado: number;
  moduloAdicionadoSelecionadoEditar: number;
  
  partesModuloSelecionado: Produto[];
  parteSelecionada: Produto;
  parteAdicionadaSelecionada: number;

  materiaisArmarioSelecionado: Material[];
  materiaisModuloSelecionado: Material[];
  materiaisParteSelecionada: Material[];
  materialArmarioSelecionado: Material;
  materialModuloSelecionado: Material;
  materialParteSelecionada: Material;

  acabamentosMaterialArmarioSelecionado: Acabamento[];
  acabamentoMaterialArmarioSelecionado: Acabamento;
  acabamentosMaterialModuloSelecionado: Acabamento[];
  acabamentoMaterialModuloSelecionado: Acabamento;
  acabamentosMaterialParteSelecionada: Acabamento[];
  acabamentoMaterialParteSelecionada: Acabamento;

  cidades: any[];
  cidadeEntrega: string;

  larguraModulo: number;
  alturaParte: number;
  larguraParte: number;
  profundidadeParte: number;

  dimensaoDiscreta = VALORES_DISCRETOS;
  dimensaoContinua = VALORES_CONTINUOS;

  numberStep: number = 0.1;
  larguraMin: number = Constants.LARGURA_MIN; // limites deverão ser obtidos a partir das dimensões do Produto
  alturaMin: number = Constants.ALTURA_MIN;
  profundidadeMin: number = Constants.PROFUNDIDADE_MIN;
  larguraMax: number = Constants.LARGURA_MAX;
  alturaMax: number = Constants.ALTURA_MAX;
  profundidadeMax: number = Constants.PROFUNDIDADE_MAX;

  sicGcErro: boolean = false;
  sicEncErro: boolean = false;
  
  isLoggedIn: boolean = false;

  canEditModulo: boolean = true;
  
  constructor(private produtoService: ProdutoService, 
              private materialService: MaterialService,
              private itemService: ItemService,
              private encomendaService: EncomendaService,
              private apiCheckService: ApiCheckService,
              private starterService: StarterService,
              private snackBar: MatSnackBar,
              protected localStorage: LocalStorage) {
              this.localStorage.getItem('auth').subscribe((data) => {
                if(data != null) {
                  this.isLoggedIn = true;
                }
              });
            }

  displayMessage(message: string) {

    this.snackBar.open(message, 'Fechar', {
      duration: 5000
    });
  }

  ngOnInit() {

    this.getArmarios();
    this.checkSiCEncomendas();
    this.getCidades();
  }

  ngAfterViewInit(): void {
    
    Configurador.init();
    Configurador.animate();
  }

  updateDimensoes(): void {

    Configurador.updateDimensoes(this.armario.altura, this.armario.largura, this.armario.profundidade);
  }

  private checkSiCEncomendas(): void {
    this.apiCheckService.checkSiCEncomendas()
    .subscribe(_ => {},
      err => this.sicEncErro = true);
  }

  getArmarios(): void {
    
    this.produtoService.getArmarios()
    .subscribe(armarios => this.armarios = armarios,
      err => this.sicGcErro = true);
  }

  getModulosArmarioSelecionado(): void {

    this.produtoService.getModulosArmario(this.armarioSelecionado.id)
    .subscribe(modulos => this.modulosArmarioSelecionado = modulos);
  }

  getPartesModuloSelecionado(): void {

    this.produtoService.getPartesModulo(this.moduloSelecionado.id)
    .subscribe(partes => this.partesModuloSelecionado = partes);
  }

  onArmarioChange(): void {

    this.produtoService.getModulosArmario(this.armarioSelecionado.id)
    .subscribe(modulos => this.modulosArmarioSelecionado = modulos);
    
    this.getMateriaisArmario();

    this.armario.idProduto = this.armarioSelecionado.id;
    
    this.armario.altura = this.armarioSelecionado.altura.listaValores[0];
    this.armario.largura = this.armarioSelecionado.largura.listaValores[0];
    this.armario.profundidade = this.armarioSelecionado.profundidade.listaValores[0];

    this.updateDimensoes();

    this.modulosAdicionados = [];
  }

  carregarModulosObrigatoriosArmario(): void {

    this.produtoService.getModulosObrigatoriosArmario(this.armarioSelecionado.id)
    .subscribe(modulos => {
      this.modulosAdicionados = modulos.map(modulo => this.moduloFromProduto(modulo));
    });
  }

  private moduloFromProduto(produto: Produto) : ProdutoItem {

    let modulo: ProdutoItem = new ProdutoItem();
    modulo.idProduto = produto.id;
    modulo.altura = produto.altura.listaValores[0];
    modulo.largura = produto.largura.listaValores[0];
    modulo.profundidade = produto.profundidade.listaValores[0];
    modulo.idMaterial = this.materialArmarioSelecionado.id;
    modulo.idAcabamento = this.acabamentoMaterialArmarioSelecionado.id;

    return modulo;
  }

  onModuloChange(): void {

    this.produtoService.getPartesModulo(this.moduloSelecionado.id)
    .subscribe(partes => this.partesModuloSelecionado = partes);

    this.larguraModulo = this.moduloSelecionado.largura.listaValores[0];

    this.getMateriaisModuloSelecionado();

  }

  onModuloAdicionadoSelecionadoLarguraChange(): void {
    
    let modulo = this.modulosAdicionados[this.moduloAdicionadoSelecionado];

    if (!modulo.largura)
      return;

    this.canEditModulo = false;

    this.itemService.updateItem(modulo)
    .subscribe(updatedModulo => { 
      this.modulosAdicionados[this.moduloAdicionadoSelecionado] = updatedModulo;
      this.canEditModulo = true;
    },
    err => this.displayMessage(err.error));
  }

  onParteChange(): void {

    this.getMateriaisParteSelecionada();

    this.alturaParte = this.parteSelecionada.altura.listaValores[0];
  }

  addModulo(modulo: Produto): void {

    if (!modulo) {
      this.displayMessage('Nenhum módulo selecionado');
      return;
    }

    if (!this.larguraModulo) {
      this.displayMessage('Por favor defina a largura do módulo');
      return;
    }
/**
    if (!this.materialModuloSelecionado) {
      this.displayMessage('Por favor selecione um material para o módulo');
      return;
    }

    if (!this.acabamentoMaterialModuloSelecionado) {
      this.displayMessage('Por favor selecione um acabamento para o módulo');
      return;
    }
*/
    if (!this.armario.largura || !this.armario.profundidade) {
      this.displayMessage('Por favor defina as dimensões do armário primeiro');
      return;
    }

    var itemModulo: ProdutoItem = new ProdutoItem();

    itemModulo.idProduto = modulo.id;
    itemModulo.idMaterial = this.armario.idMaterial;
    itemModulo.idAcabamento = this.armario.idAcabamento;
    itemModulo.largura = this.larguraModulo;
    itemModulo.altura = this.armario.altura;
    itemModulo.profundidade = this.armario.profundidade;
    if(Configurador.validarNovoModulo(itemModulo.largura)) {
      this.itemService.addItem(itemModulo)
      .subscribe(
        item => {
          try{
            Configurador.addModulo(itemModulo);
            this.modulosAdicionados.push(item);
            this.armario.filhos = this.modulosAdicionados;
            this.displayMessage('Módulo adicionado');
          }catch(e){
            this.displayMessage(e);
          }
      },
        err => this.displayMessage(err.error));
    }else {
      this.displayMessage('Largura Invalida.');
    }
  }

  removeModulo() {

    let modulo = this.modulosAdicionados[this.moduloAdicionadoSelecionadoEditar];

    if (!modulo)
      return;

    this.itemService.deleteItem(modulo._id)
    .subscribe(_ => {

      // Remover filhos - provavelmente devia ser feito na API SiCEncomendas
      modulo.filhos.forEach(parte => {
        this.itemService.deleteItem(parte._id)
        .subscribe()
      });
        Configurador.removerModulo(this.moduloAdicionadoSelecionadoEditar);
      this.modulosAdicionados.splice(this.moduloAdicionadoSelecionadoEditar,1);
      this.moduloAdicionadoSelecionado = null;
      this.displayMessage('Módulo removido');
    });
  }

  addParte(parte: Produto): void {
    
    if (this.moduloAdicionadoSelecionado == null) {
      this.displayMessage('Por favor selecione um módulo');
      return;
    }

    if (!parte) {
      this.displayMessage('Por favor selecione uma parte');
      return;
    }

    if (!this.alturaParte) {
      this.displayMessage('Por favor defina a altura da parte');
      return;
    }

    if (!this.materialParteSelecionada) {
      this.displayMessage('Por favor selecione um material para a parte');
      return;
    }

    if (!this.acabamentoMaterialParteSelecionada) {
      this.displayMessage('Por favor selecione um acabamento para a parte');
      return;
    }

    let itemParte: ProdutoItem = new ProdutoItem();
    itemParte.idProduto = parte.id;
    itemParte.idMaterial = this.materialParteSelecionada.id;
    itemParte.idAcabamento = this.acabamentoMaterialParteSelecionada.id;
    itemParte.largura = this.larguraParte;
    itemParte.altura = this.alturaParte;
    itemParte.profundidade = this.profundidadeParte;
    let tipo = this.parteToIndexConfigurador(parte.tipo);

    //if (this.partesAdicionadas.filter(produto => produto.id == parte.id).length == 0)
    if(!Configurador.validarAlturaParteIndex(itemParte, this.moduloAdicionadoSelecionado)) {
      this.displayMessage('Altura de parte inválida.');
      return;
    }

    this.itemService.addItem(itemParte)
    .subscribe(
      item => {
        
        this.itemService.updateItem(this.modulosAdicionados[this.moduloAdicionadoSelecionado])
        .subscribe(updatedModulo => {
          this.modulosAdicionados[this.moduloAdicionadoSelecionado].filhos.push(item);
        this.displayMessage('Parte adicionada');
          this.modulosAdicionados[this.moduloAdicionadoSelecionado] = updatedModulo;
          Configurador.addParte(this.moduloAdicionadoSelecionado, itemParte, tipo, this.materialParteSelecionada, this.acabamentoMaterialParteSelecionada);
        });
      },
      err => this.displayMessage(err.error));
  }

  parteToIndexConfigurador(tipo) {
    if(tipo == TipoProduto[TipoProduto.Gaveta]) return 0;
    if(tipo == TipoProduto[TipoProduto.Cabide]) return 1;
    if(tipo == TipoProduto[TipoProduto.Prateleira]) return 2;
    return -1;
  }
  removeParte() {
    
    if (this.moduloAdicionadoSelecionado == null)
      return;

    let parte: ProdutoItem = this.modulosAdicionados[this.moduloAdicionadoSelecionado].filhos[this.parteAdicionadaSelecionada];

    if (!parte)
      return;

    this.itemService.deleteItem(parte._id)
    .subscribe(_ => {
      this.modulosAdicionados[this.moduloAdicionadoSelecionado].filhos.splice(this.parteAdicionadaSelecionada,1);
      this.itemService.updateItem(this.modulosAdicionados[this.moduloAdicionadoSelecionado])
      .subscribe(updatedModulo => this.modulosAdicionados[this.moduloAdicionadoSelecionado] = updatedModulo);

      Configurador.removerParte(this.moduloAdicionadoSelecionado, this.parteAdicionadaSelecionada);
      this.displayMessage('Parte removida');
    },
    err => this.displayMessage(err.error));

  }

  getMateriaisArmario(): void {

    this.produtoService.getMateriais(this.armarioSelecionado.id)
    .subscribe(materiais => this.materiaisArmarioSelecionado = materiais);
  }

  getMateriaisModuloSelecionado(): void {

    this.produtoService.getMateriais(this.moduloSelecionado.id)
    .subscribe(materiais => this.materiaisModuloSelecionado = materiais);
  }

  getMateriaisParteSelecionada(): void {

    this.produtoService.getMateriais(this.parteSelecionada.id)
    .subscribe(materiais => this.materiaisParteSelecionada = materiais);
  }

  onMaterialArmarioChange(): void {

    this.armario.idMaterial = this.materialArmarioSelecionado.id;
    this.getAcabamentosMaterialArmarioSelecionado();
    this.updateMaterial();
  }

  onMaterialModuloChange(): void {

    this.getAcabamentosMaterialModuloSelecionado();
  }

  onMaterialParteChange(): void {

    this.getAcabamentosMaterialParteSelecionada();
  }

  private getAcabamentosMaterialArmarioSelecionado(): void {
    
    this.materialService.getAcabamentosMaterial(this.materialArmarioSelecionado.id)
    .subscribe(acabamentos => this.acabamentosMaterialArmarioSelecionado = acabamentos);
  }

  private getAcabamentosMaterialModuloSelecionado(): void {

    this.materialService.getAcabamentosMaterial(this.materialModuloSelecionado.id)
    .subscribe(acabamentos => this.acabamentosMaterialModuloSelecionado = acabamentos);
  }

  private getAcabamentosMaterialParteSelecionada(): void {

    this.materialService.getAcabamentosMaterial(this.materialParteSelecionada.id)
    .subscribe(acabamentos => this.acabamentosMaterialParteSelecionada = acabamentos);
  }

  private updateMaterial(): void {

    this.armario.idMaterial = this.materialArmarioSelecionado.id;
    Configurador.updateMaterial(this.materialArmarioSelecionado);
  }

  onAcabamentoArmarioChange(): void {

    this.updateAcabamentoArmario();
  }

  private updateAcabamentoArmario(): void {

    this.armario.idAcabamento = this.acabamentoMaterialArmarioSelecionado.id;
    Configurador.updateAcabamento(this.acabamentoMaterialArmarioSelecionado);
  }

  finalizarEncomenda(): void {

    if (!this.cidadeEntrega) {
      this.displayMessage('Por favor selecione uma cidade para entrega');
      return;
    }

    let encomenda: Encomenda = new Encomenda();
    encomenda.cidadeEntrega = this.cidadeEntrega;
    this.localStorage.getItem('auth').subscribe((data) => {
      this.starterService.getIdUtilizador(data).subscribe((id) => {
        encomenda.idUtilizador = id;
        this.itemService.addItem(this.armario)
        .subscribe(
          item => {  
          encomenda.itens.push(item);
          this.encomendaService.addEncomenda(encomenda)
          .subscribe(
            _ => this.displayMessage('Encomenda efetuada'),
            err => this.displayMessage(err.error));
        },
        err => this.displayMessage(err.error));
      });
    });
  }
  
  moduloById(id: number) {

    return this.modulosArmarioSelecionado.find(modulo => modulo.id == id);
  }

  parteById(id: number) {

    return this.partesModuloSelecionado.find(parte => parte.id === id);
  }

  private getCidades() {
    // TODO: Cidades deveriam ser obtidas de um outro service para as Entregas
    this.encomendaService.getCidades()
    .subscribe(cidades => this.cidades = cidades);
  }
}
