import { Component, OnInit,ViewEncapsulation , ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Material } from '../../gestor/material/material';
import { MaterialService } from '../../gestor/material/material.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AcabamentoService } from '../../gestor/acabamento/acabamento.service';
import { Acabamento } from '../../gestor/acabamento/acabamento';
import { MaterialAcabamento } from '../../gestor/material/materialAcabamento';

@Component({
  selector: 'app-gerir-material',
  templateUrl: './gerir-material.component.html',
  styleUrls: ['./gerir-material.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GerirMaterialComponent implements OnInit {

  flagServer: boolean = false;

  // VARS

  @ViewChild('fileCriar') fileCriar;
  @ViewChild('fileEditar') fileEditar;
  statusMessage: string;
  MAX_FILE_SIZE: number = 1024000;
  selectedMaterialEliminar: Material = null;
  selectedMaterialEditar: Material = null;
  selectedMaterialAcabamento: number = 0;
  selectedTexturaCriar: File = null;
  selectedTexturaEditar: File = null;
  selectedMaterial: Material = null;
  selectedAcabamento: Acabamento = null;
  selectedMaterialPreco: number = 0;
  materialTextEliminar = "Escolha um material";
  materialTextEditar = "Escolha um material";
  materialTextIncremento = "Selecione um material";
  materialFormCriar = "Nome do material";
  acabamentoTextIncremento = "Selecione um acabamento";
  precoFormCriar = "Preço do material";
  precoFormIncremento = "Preço";
  materialFormEditar = "Nome do material";
  criarFormGroup: FormGroup;
  editarFormGroup: FormGroup;
  incrementoFormGroup: FormGroup;

  // LISTAS

  materiaisList: Material[] = [];
  precoList: number[] = [];
  incrementoList: number[] = [];
  acabamentosList: Acabamento[] = [];
  acabamentosListSelectedCriar: boolean[] = [];
  acabamentosListSelectedEditar: boolean[] = [];
  precosListSelectedEditar: number[] = [];
  selectedMaterialAcabamentosList: Acabamento[] = [];
  listarMaterialAcabamentosList: Acabamento[] = [];

  // FLAGS

  disableEliminar: boolean = true;
  disableEditar: boolean = true;
  disabledMateriaisList: boolean = false;
  disabledAcabamentosList: boolean = false;
  newFile: boolean = false;
  maxfiles: boolean = false;
  listar: boolean = false;
  disableBotaoCriar: boolean = false;

  constructor(private materialService: MaterialService,
    private _formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private acabamentoService: AcabamentoService) { }

  ngOnInit() {
    this.criarFormGroup = this._formBuilder.group({
      criarMaterialCtrl: ['', Validators.required],
      criarPrecoCtrl: ['', Validators.required]
    });
    this.editarFormGroup = this._formBuilder.group({
      editarNomeCtrl: [{ value: '', disabled: true }, Validators.required],
      editarPrecoCtrl: [{ value: '', disabled: true }, Validators.required]
    });
    this.incrementoFormGroup = this._formBuilder.group({
      incrementoPrecoCtrl: ['']
    });
    this.getMateriais();
    this.getAcabamentos();
  }

  // FUNCTIONS DE BUTTONS

  importarTexturaButton() {
    this.fileCriar.nativeElement.click();
  }

  importarEditarTexturaButton() {
    this.fileEditar.nativeElement.click();
  }

  uploadCancelButton($event) {
    console.log(1);
    if ($event.target.files[0]) {
      // Se foi escolhido um ficheiro em vez do cancel
      var fileType = $event.target.files[0].type;
      var fileSize = $event.target.files[0].size;
      if ((fileType == "image/jpeg" || fileType == "image/jpg" || fileType == "image/png") && fileSize < this.MAX_FILE_SIZE) {
        // Se o ficheiro for válido
        this.selectedTexturaCriar = $event.target.files[0];
        this.disableImportButton();
      } else {
        alert("Ficheiro inválido!");
      }
    }
  }

  uploadCancelButton2($event) {
    if ($event.target.files[0]) {
      // Se foi escolhido um ficheiro em vez do cancel
      var fileType = $event.target.files[0].type;
      var fileSize = $event.target.files[0].size;
      if ((fileType == "image/jpeg" || fileType == "image/jpg" || fileType == "image/png") && fileSize < this.MAX_FILE_SIZE) {
        // Se o ficheiro for válido
        this.newFile = true;
        this.selectedTexturaEditar = $event.target.files[0];
      } else {
        alert("Ficheiro inválido!");
      }
    }
  }

  disableImportButton() {
    this.maxfiles = true;
  }

  enableImportButton() {
    this.maxfiles = false;
  }

  botaoEliminarEvent() {
    this.deleteMaterial();
  }

  removerTexturaButton() {
    this.selectedTexturaCriar = null;
    this.enableImportButton();
  }

  initializePrecoList(index: number){
    
    var incrementoP = this.incrementoFormGroup.controls['incrementoPrecoCtrl'].value;

    this.precoList[index] = incrementoP;
  }

  botaoCriarEvent() {

    //Se o nome for válido e for selecionada alguma textura
    if (!this.criarFormGroup.invalid && this.selectedTexturaCriar != null) {
      var precoBase = this.criarFormGroup.controls['criarPrecoCtrl'].value;

      if (precoBase > 0) {
        var tipo = this.criarFormGroup.controls['criarMaterialCtrl'].value;
        var textura = this.selectedTexturaCriar;
        var acabamentos = [];

        //Se algum acabamento foi selecionado
        if (this.acabamentosListSelectedCriar.includes(true)) {
          for (let i = 0; i < this.acabamentosListSelectedCriar.length; i++) {
          
            //Quais os que foram selecionados
            if (this.acabamentosListSelectedCriar[i]) {
              acabamentos.push(this.acabamentosList[i]);
            }
          }
        }
        this.addMaterial(tipo, precoBase, textura, acabamentos);
      } else {
        this.snackBar.open("Erro!", "Preço tem que ser maior que 0!", {
          duration: 4000
        });
      }
    } else {
      if (this.criarFormGroup.get("criarMaterialCtrl").invalid) {
        this.snackBar.open("Erro!", "Insira um nome válido!", {
          duration: 4000
        });
      } else if (this.criarFormGroup.get("criarPrecoCtrl").invalid) {
        this.snackBar.open("Erro!", "Insira um preço válido!", {
          duration: 4000
        });
      } else {
        this.snackBar.open("Erro!", "Importe uma textura para o material!", {
          duration: 4000
        });
      }
    }

  }

  botaoAdicionarIncrementoEvent(){
    if((!this.incrementoFormGroup.get("incrementoPrecoCtrl").invalid)){
      if (this.selectedMaterial == null) {
        this.snackBar.open("Erro!", "Selecione um material!", {
          duration: 4000
        });
      }else if (this.selectedAcabamento == null) {
        this.snackBar.open("Erro!", "Selecione um acabamento!", {
          duration: 4000
        });
      }

      let acabamentoId = this.selectedAcabamento.id;
      let materialId = this.selectedMaterial.id;
      var incrementoPreco = this.incrementoFormGroup.controls['incrementoPrecoCtrl'].value;

      //let incrementoPreco: IncrementoPreco = new IncrementoPreco(ip);
      this.addIncremento(materialId,acabamentoId,incrementoPreco);
    }else{
      this.snackBar.open("Erro!", "Insira um preço válido!", {
        duration: 4000
      });
    }
  }

  addIncremento(materialId: number, acabamentoId: number,incrementoPreco: number){
    this.materialService.addIncremento({ acabamentoId, materialId,incrementoPreco } as MaterialAcabamento).
    subscribe(_ => {
      this.fireSnackBar("Sucesso!", "Incremento de preço adicionado com sucesso!");
      this.resetAll();
    },
      erro => {
        alert("Serviço indisponível!");
        console.log(erro);
      });
  }

  botaoEditarEvent() {
    //Se o nome for válido
    if (!this.editarFormGroup.invalid) {
      var precoBase = this.editarFormGroup.controls['editarPrecoCtrl'].value;
      if (precoBase > 0) {
        var idAlterar = this.selectedMaterialEditar.id;
        var tipo = this.editarFormGroup.controls['editarNomeCtrl'].value;
        var textura = null;
        if (this.newFile) {
          textura = this.selectedTexturaEditar;
        }
        var acabamentosEliminar = [];
        var acabamentosAdicionar = [];

        for (let i = 0; i < this.acabamentosListSelectedEditar.length; i++) {
          var acabamentoVer = this.acabamentosList[i];
          //Significa que o acabamento a ver está selecionado
          if (this.acabamentosListSelectedEditar[i]) {
            //Se o material não tinha este acabamento é para ser adicionado à bd
            if (!this.selectedMaterialAcabamentosList.find(acabamento2 => acabamento2['id'] === acabamentoVer.id)) {
              acabamentosAdicionar.push(acabamentoVer);
            }
          } else {
            //Se o material tinha este acabamento, mas já não tem é para ser removido da bd
            if (this.selectedMaterialAcabamentosList.find(acabamento2 => acabamento2['id'] === acabamentoVer.id)) {
              acabamentosEliminar.push(acabamentoVer);
            }
          }
        }

        this.updateMaterial(idAlterar, tipo, precoBase, textura, acabamentosAdicionar, acabamentosEliminar);
      } else {
        this.snackBar.open("Erro!", "Preço tem que ser maior que 0!", {
          duration: 4000
        });
      }
    } else {
      if (this.editarFormGroup.get("editarNomeCtrl").invalid) {
        this.snackBar.open("Erro!", "Insira um nome válido!", {
          duration: 4000
        });
      } else if (this.editarFormGroup.get("editarPrecoCtrl").invalid) {
        this.snackBar.open("Erro!", "Insira um preço válido!", {
          duration: 4000
        });
      }
    }
  }

  // EVENTS HANDLER

  materialEditarEvent(material: Material) {
    this.acabamentosListSelectedEditar = [false];
    this.selectedMaterialEditar = material;
    this.editarFormGroup.get("editarNomeCtrl").setValue(material.tipo);
    this.editarFormGroup.get("editarPrecoCtrl").setValue(material.precoBase);
    this.materialTextEditar = material.tipo;
    this.selectedTexturaEditar = material.textura;
    this.getAcabamentosMaterial(material.id);
    this.selectPrecos(material);
    this.newFile = false;
    this.unlockEditar();
  }

  private selectPrecos(material: Material){
    for(let i = 0; i < this.acabamentosList.length; i++){
      this.materialService.getMaterialAcabamento(material.id,this.acabamentosList[i].id).subscribe(
        materialAc =>{
          this.precosListSelectedEditar[i] = materialAc.incrementoPreco;
        }
      );
    }
  }

  private organizeList(){
    for(let i = 0; i < this.precoList.length; i++){
      if(this.acabamentosListSelectedCriar[i]){
        if(this.precoList[i] != null){
          this.incrementoList.push(this.precoList[i]);
        }else{
          this.incrementoList.push(0);
        }
      }
    }
}

  materialEliminarEvent(material: Material) {
    this.listar = false;
    this.selectedMaterialEliminar = material;
    this.materialTextEliminar = material.tipo;
    this.unlockEliminar();
  }

  materialListarEvent(material: Material) {
    this.listarMaterialAcabamentosList = [];
    this.listar = true;
    this.getAcabamentosMaterial(material.id);
  }

  materialSelectEvent(material: Material) {
    this.selectedMaterial = material;
    this.selectedMaterialPreco = this.selectedMaterial.precoBase;
  }

  acabamentoSelectEvent(acabamento: Acabamento) {
    this.selectedAcabamento = acabamento;
  }

  // FUNCTIONS DE BDDAD

  private getMateriais(): void {
    this.materialService.getMateriais().subscribe(data => {
      this.materiaisList = data;
      if (this.materiaisList.length == 0) {
        this.disabledMateriaisList = true;
      } else {
        this.disabledMateriaisList = false;
      }
    },
      erro => {
        this.flagServer = true;
        console.log(erro);
        this.statusMessage = "Error: Service Unavailable";
      });
  }

  private getAcabamentos(): void {
    this.acabamentoService.getAcabamentos().subscribe(data => {
      this.acabamentosList = data;
      if (this.acabamentosList.length == 0) {
        this.disabledAcabamentosList = true;
      } else {
        this.disabledAcabamentosList = false;
      }
    },
      erro => {
        this.flagServer = true;
        console.log(erro);
        this.statusMessage = "Error: Service Unavailable";
      });
  }

  private addMaterial(tipo: string, precoBase: number, textura: File, acabamentos: Acabamento[]): void {
    tipo = tipo.trim();
    this.disableBotaoCriar = true;
    var ind = 0;
    this.organizeList();
    this.materialService.addMaterial({ tipo, precoBase, textura } as Material)
      .subscribe(material => {
        if (acabamentos.length > 0) {
          var materialId = material.id;
        
          acabamentos.forEach((acabamento, index, acabamentos) => {
            let acabamentoId = acabamento.id;
            var incrementoPreco = this.incrementoList[ind];
            ind++;

            this.materialService.addMaterialAcabamento({ acabamentoId, materialId,incrementoPreco } as MaterialAcabamento)
              .subscribe(_ => {
                //Se for o último acabamento e todos os anteriores foram criados com sucesso
                if (Object.is(acabamentos.length - 1, index)) {
                  this.getMateriais();
                  this.fireSnackBar("Sucesso!", "Material criado com sucesso!");
                  this.disableBotaoCriar = false;
                  this.resetAll();
                }
              },
                erro => {
                  alert("Serviço indisponível!");
                  console.log(erro);
                  this.disableBotaoCriar = true;
                });
          });
        } else {
          this.getMateriais();
          this.fireSnackBar("Sucesso!", "Material criado com sucesso!");
          this.disableBotaoCriar = false;
          this.resetAll();
        }
      },
        erro => {
          alert("Serviço indisponível!");
          console.log(erro);
          this.disableBotaoCriar = true;
        });
  }

  private updateMaterial(idAlterar: number, tipo: string, precoBase: number, textura: File, acabamentosAdicionar: Acabamento[], acabamentosEliminar: Acabamento[]): void {
    this.disableEditar = true;
    this.materialService.updateMaterial(idAlterar, { tipo, precoBase, textura } as Material)
      .subscribe(_ => {
        if (acabamentosAdicionar.length > 0 || acabamentosEliminar.length > 0) {
          var materialId = idAlterar
          acabamentosAdicionar.forEach((acabamento, indexAdicionar, acabamentosAdicionar) => {
            let acabamentoId = acabamento.id;
            let incrementoPreco =  this.precosListSelectedEditar[indexAdicionar];
            this.materialService.addMaterialAcabamento({ acabamentoId, materialId,incrementoPreco } as MaterialAcabamento)
              .subscribe(_ => {
                //Se for o último acabamento e todos os anteriores foram criados com sucesso e não existem materiais a eliminar
                if (Object.is(acabamentosAdicionar.length - 1, indexAdicionar) && acabamentosEliminar.length == 0) {
                  this.getMateriais();
                  this.fireSnackBar("Sucesso!", "Material alterado com sucesso!");
                  this.disableEditar = false;
                  this.resetAll();
                }
              },
                erro => {
                  alert("Serviço indisponível!");
                  console.log(erro);
                  this.disableEditar = false;
                });
          });

          acabamentosEliminar.forEach((acabamento, indexEliminar, acabamentosEliminar) => {
            let acabamentoId = acabamento.id;
            this.materialService.deleteMaterialAcabamento({ acabamentoId, materialId } as MaterialAcabamento)
              .subscribe(_ => {
                //Se for o último acabamento e todos os anteriores foram eliminados com sucesso
                if (Object.is(acabamentosEliminar.length - 1, indexEliminar)) {
                  this.getMateriais();
                  this.fireSnackBar("Sucesso!", "Material alterado com sucesso!");
                  this.disableEditar = false;
                  this.resetAll();
                }
              },
                erro => {
                  alert("Serviço indisponível!");
                  console.log(erro);
                  this.disableEditar = false;
                });
          });
        } else {
          //Caso em que não existem nem acabamentos a eliminar nem a adicionar
          this.getMateriais();
          this.fireSnackBar("Sucesso!", "Material alterado com sucesso!");
          this.disableEditar = false;
          this.resetAll();
        }
      }, _ => {
        alert("Serviço indisponível!");
        this.disableEditar = false;
      });
  }

  private deleteMaterial(): void {
    this.disableEliminar = true;
    this.materialService.deleteMaterial(this.selectedMaterialEliminar).
      subscribe(_ => {
        this.getMateriais();
        this.fireSnackBar("Sucesso!", "Material eliminado com sucesso!");
        this.disableEliminar = false;
        this.resetAll();
      },
        erro => {
          alert("Serviço indisponível!");
          console.log(erro);
          this.disableEliminar = false;
        });
  }

  private getAcabamentosMaterial(id: number): void {
    this.materialService.getAcabamentosMaterial(id).
      subscribe(acabamentos => {
        if (!this.listar) {
          this.selectedMaterialAcabamentosList = acabamentos;
          var counter = 0;
          this.acabamentosList.forEach(acabamento => {
            if (acabamentos.find(acabamento2 => acabamento2['id'] === acabamento.id)) {
              this.acabamentosListSelectedEditar[counter] = true;
            
            } else {
              this.acabamentosListSelectedEditar[counter] = false;
            }
            counter++;
          });
        } else {
          this.listarMaterialAcabamentosList = acabamentos;
        }
      },
        erro => { 
          console.log(erro);
          this.statusMessage = "Error: Service Unavailable"; });
  }

  // FUNCTIONS DE UTILIDADE

  lockEliminar() {
    this.disableEliminar = true;
  }

  unlockEliminar() {
    this.disableEliminar = false;
  }

  lockEditar() {
    this.disableEditar = true;
    this.editarFormGroup.disable();
  }

  unlockEditar() {
    this.disableEditar = false;
    this.editarFormGroup.enable();
  }

  resetAll() {
    this.lockEliminar();
    this.lockEditar();
    this.materialTextEliminar = "Escolha um material";
    this.materialTextEditar = "Escolha um material";
    this.materialFormCriar = "Nome do material";
    this.precoFormCriar = "Preço do material";
    this.materialFormEditar = "Nome do material";
    this.precoFormIncremento = "Preço";
    this.selectedMaterialEliminar = null;
    this.selectedMaterialEditar = null;
    this.selectedTexturaCriar = null;
    this.selectedTexturaEditar = null;
    this.acabamentosListSelectedCriar = [false];
    this.acabamentosListSelectedEditar = [false];
    this.selectedMaterialAcabamentosList = [];
    this.listarMaterialAcabamentosList = [];
    this.precoList = [];
    this.criarFormGroup.reset();
    this.editarFormGroup.reset();
    this.maxfiles = false;
    this.listar = false;
  }

  fireSnackBar(type: string, message: string) {
    this.snackBar.open(type, message, {
      duration: 4000
    });
  }

}
