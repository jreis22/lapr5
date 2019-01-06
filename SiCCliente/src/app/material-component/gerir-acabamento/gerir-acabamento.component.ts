import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Acabamento } from '../../gestor/acabamento/acabamento';
import { AcabamentoService } from '../../gestor/acabamento/acabamento.service';

@Component({
  selector: 'app-gerir-acabamento',
  templateUrl: './gerir-acabamento.component.html',
  styleUrls: ['./gerir-acabamento.component.css']
})

export class GerirAcabamentoComponent implements OnInit {

  constructor(public vcRef: ViewContainerRef,
    private cpService: ColorPickerService,
    private _formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private acabamentoService: AcabamentoService) { }

  flagServer: boolean = false;

  // VARS

  criarFormGroup: FormGroup;
  editarFormGroup: FormGroup;
  statusMessage: string;
  acabamentoTextEditar = "Escolha um acabamento";
  acabamentoTextEliminar = "Escolha um acabamento";
  sliderMetalCriar: number = 0;
  sliderRugoCriar: number = 0;
  sliderMetalEditar: number = 0;
  sliderRugoEditar: number = 0;
  selectedAcabamentoEditar: Acabamento = null;
  selectedAcabamentoEliminar: Acabamento = null;

  // LISTAS

  acabamentosList: Acabamento[] = [];

  // FLAGS

  disabledAcabamentosList: boolean = false;
  disableAllEditar: boolean = true;
  disableEliminar: boolean = true;
  disableCriarButton: boolean = false;

  public arrayColorsCriar: any = {
    color0: '#000000',
    color1: '#2883e9',
    color2: '#e920e9',
    color3: 'rgb(255,245,0)',
    color4: 'rgb(236,64,64)',
    color5: 'rgba(45,208,45,1)'
  };

  public arrayColorsEditar: any = {
    color0: '#000000',
    color1: '#2883e9',
    color2: '#e920e9',
    color3: 'rgb(255,245,0)',
    color4: 'rgb(236,64,64)',
    color5: 'rgba(45,208,45,1)'
  };

  public selectedColorCriar: string = 'color0';
  public selectedColorEditar: string = 'color0';

  public color0: string = '#000000';
  public color1: string = '#2889e9';
  public color2: string = '#e920e9';
  public color3: string = '#fff500';
  public color4: string = 'rgb(236,64,64)';
  public color5: string = 'rgba(45,208,45,1)';
  public color6: string = '#1973c0';
  public color7: string = '#f200bd';
  public color8: string = '#a8ff00';
  public color9: string = '#278ce2';
  public color10: string = '#0a6211';
  public color11: string = '#f2ff00';
  public color12: string = '#f200bd';
  public color13: string = 'rgb(0,255,255)';
  public color14: string = 'rgb(255,0,0)';
  public color15: string = '#a51ad633';
  public color16: string = '#666666';
  public color17: string = '#ff0000';

  public cmykColor: Cmyk = new Cmyk(0, 0, 0, 0);

  tiles: any[] = [
    {
      text: '1) Escolha a emissividade:',
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    {
      text: '2) Escolha a metalicidade:',
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    {
      text: '3) Escolha a rugosidade:',
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    {
      text: '4) Escolha o nome:',
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    {
      cols: 1,
      rows: 6,
      color: 'lightblue'
    },
    {
      cols: 1,
      rows: 6,
      color: 'lightblue'
    },
    {
      cols: 1,
      rows: 6,
      color: 'lightblue'
    },
    {
      cols: 1,
      rows: 6,
      color: 'lightblue'
    },
  ];

  tiles2: any[] = [
    {
      text: '1) Escolha o acabamento:',
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    {
      text: '2) Escolha a emissividade:',
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    {
      text: '3) Escolha a metalicidade/rugosidade:',
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    {
      text: '4) Escolha o nome:',
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    {
      cols: 1,
      rows: 6,
      color: 'lightblue'
    },
    {
      cols: 1,
      rows: 6,
      color: 'lightblue'
    },
    {
      cols: 1,
      rows: 6,
      color: 'lightblue'
    },
    {
      cols: 1,
      rows: 6,
      color: 'lightblue'
    },
  ];

  ngOnInit() {
    this.criarFormGroup = this._formBuilder.group({
      criarCtrl: ['', Validators.required]
    });
    this.editarFormGroup = this._formBuilder.group({
      editarCtrl: [{ value: '', disabled: true }, Validators.required]
    });
    this.getAcabamentos();
  }

  public onEventLog(event: string, data: any): void {
    console.log(event, data);
  }

  public onChangeColorCmyk(color: string): Cmyk {
    const hsva = this.cpService.stringToHsva(color);

    if (hsva) {
      const rgba = this.cpService.hsvaToRgba(hsva);

      return this.cpService.rgbaToCmyk(rgba);
    }

    return new Cmyk(0, 0, 0, 0);
  }

  public onChangeColorHex8(color: string): string {
    const hsva = this.cpService.stringToHsva(color, true);

    if (hsva) {
      return this.cpService.outputFormat(hsva, 'rgba', null);
    }

    return '';
  }

  // EVENTS HANDLER

  acabamentoSelecionadoEvent(acabamento: Acabamento) {
    this.selectedAcabamentoEditar = acabamento;
    this.acabamentoTextEditar = acabamento.tipo;
    this.arrayColorsEditar[this.selectedColorEditar] = acabamento.emissividade;
    this.sliderMetalEditar = acabamento.metalicidade;
    this.sliderRugoEditar = acabamento.rugosidade;
    this.unlockEditar();
  }

  acabamentoEliminarEvent(acabamento: Acabamento) {
    this.selectedAcabamentoEliminar = acabamento;
    this.acabamentoTextEliminar = acabamento.tipo;
    this.unlockEliminar();
  }

  // FUNCTIONS DE UTILIDADE

  resetCriar() {
    this.sliderMetalCriar = 0;
    this.sliderRugoCriar = 0;
    this.arrayColorsCriar[this.selectedColorCriar] = this.color0;
    this.criarFormGroup.reset();
  }

  resetEditar() {
    this.sliderMetalEditar = 0;
    this.sliderRugoEditar = 0;
    this.arrayColorsEditar[this.selectedColorEditar] = this.color0;
    this.editarFormGroup.reset();
    this.acabamentoTextEditar = "Escolha um acabamento";
    this.editarFormGroup.disable();
    this.selectedAcabamentoEditar = null;
    this.lockEditarAll();
  }

  resetEliminar() {
    this.acabamentoTextEliminar = "Escolha um acabamento";
    this.selectedAcabamentoEliminar = null;
    this.lockEliminar();
  }

  lockEditarList() {
    this.disabledAcabamentosList = true;
    this.disableAllEditar = true;
  }

  lockEditarAll() {
    this.disableAllEditar = true;
    this.editarFormGroup.disable();
  }

  lockEliminar() {
    this.disableEliminar = true;
  }

  unlockEditar() {
    this.disabledAcabamentosList = false;
    this.disableAllEditar = false;
    this.editarFormGroup.enable();
  }

  unlockEliminar() {
    this.disableEliminar = false;
  }

  fireSnackBar(type: string, message: string) {
    this.snackBar.open(type, message, {
      duration: 4000
    });
  }

  // FUNCTIONS DE BDDAD

  private getAcabamentos(): void {
    this.acabamentoService.getAcabamentos().subscribe(data => {
      this.acabamentosList = data;
      if (this.acabamentosList.length == 0) {
        this.lockEditarList();
      } else {
        this.unlockEditar();
        this.lockEditarAll();
      }
    },
      _ => {
        this.flagServer=true;
        this.statusMessage = "Error: Service Unavailable"; });
  }

  private addAcabamento(tipo: string, emissividade: string, metalicidade: number, rugosidade: number): void {
    tipo = tipo.trim();
    emissividade = emissividade.trim();
    this.disableCriarButton = true;
    this.acabamentoService.addAcabamento({ tipo, emissividade, metalicidade, rugosidade } as Acabamento)
      .subscribe(_ => {
        this.getAcabamentos();
        this.fireSnackBar("Sucesso!", "Acabamento criado com sucesso!");
        this.disableCriarButton = false;
        this.resetCriar();
      },
        _ => {
          alert("Serviço indisponível!");
          this.disableCriarButton = false;
        });
  }

  private updateAcabamento(tipo: string, emissividade: string, metalicidade: number, rugosidade: number): void {
    let acabamentoFinal = new Acabamento;
    acabamentoFinal.id = this.selectedAcabamentoEditar.id;
    acabamentoFinal.tipo = tipo;
    acabamentoFinal.emissividade = emissividade;
    acabamentoFinal.metalicidade = metalicidade;
    acabamentoFinal.rugosidade = rugosidade;
    this.lockEditarAll();
    this.acabamentoService.updateAcabamento(this.selectedAcabamentoEditar.id, acabamentoFinal)
      .subscribe(_ => {
        this.getAcabamentos();
        this.fireSnackBar("Sucesso!", "Acabamento alterado com sucesso!");
        this.resetEditar();
      },
      _ => {
        alert("Serviço indisponível!");
        this.unlockEditar();
      });
  }


  private deleteAcabamento(): void {
    this.lockEliminar();
    this.acabamentoService.deleteAcabamento(this.selectedAcabamentoEliminar).
      subscribe(_ => {
        this.getAcabamentos();
        this.fireSnackBar("Sucesso!", "Acabamento eliminado com sucesso!");
        this.resetEliminar();
      },
      _ => {
        alert("Serviço indisponível!");
        this.unlockEliminar();
      });
  }

  // FUNCTIONS DE BUTTONS

  botaoEditarEvent() {
    if (this.disableAllEditar == true) {
      this.snackBar.open("Erro!", "Não foi escolhido nenhum acabamento!", {
        duration: 4000
      });
    }

    if (!this.editarFormGroup.invalid) {
      //Acabamento válido
      var tipo = this.editarFormGroup.controls['editarCtrl'].value;
      var emissividade = this.arrayColorsEditar[this.selectedColorEditar];
      var metalicidade = this.sliderMetalEditar;
      var rugosidade = this.sliderRugoEditar;
      this.updateAcabamento(tipo, emissividade, metalicidade, rugosidade);
    } else {
      this.snackBar.open("Erro!", "Insira um nome válido!", {
        duration: 4000
      });
    }
  }

  botaoCriarEvent() {

    if (!this.criarFormGroup.invalid) {
      //Acabamento válido
      var tipo = this.criarFormGroup.controls['criarCtrl'].value;
      var emissividade = this.arrayColorsCriar[this.selectedColorCriar];
      var metalicidade = this.sliderMetalCriar;
      var rugosidade = this.sliderRugoCriar;
      this.addAcabamento(tipo, emissividade, metalicidade, rugosidade);
    } else {
      this.snackBar.open("Erro!", "Insira um nome válido!", {
        duration: 4000
      });
    }

  }

  botaoEliminarEvent() {
    this.deleteAcabamento();
  }
}
