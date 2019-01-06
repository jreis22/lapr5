import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { ConfiguradorComponent } from './configurador/configurador.component';
import { GerirAcabamentoComponent } from './gerir-acabamento/gerir-acabamento.component';
import { GerirCategoriaComponent } from './gerir-categoria/gerir-categoria.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { GerirMaterialComponent } from './gerir-material/gerir-material.component';
import { GerirColecoesComponent } from './gerir-colecoes/gerir-colecoes.component';
import { GerirProdutoComponent } from './gerir-produto/gerir-produto.component';
import { GerirCatalogosComponent } from './gerir-catalogos/gerir-catalogos.component';
import { ConsultarHistoricoComponent } from './consultar-historico/consultar-historico.component';
import { EntregasComponent } from './entregas/entregas.component';
import { GerirEncomendasComponent } from './gerir-encomendas/gerir-encomendas.component';
import { AuthGuardService } from './../auth-guard.service';
import { AuthService } from './../auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    ColorPickerModule
  ],
  providers: [AuthGuardService, AuthService],
  entryComponents: [],
  declarations: [
    ConfiguradorComponent,
    GerirAcabamentoComponent,
    GerirCategoriaComponent,
    GerirColecoesComponent,
    GerirMaterialComponent,
    GerirProdutoComponent,
    GerirCatalogosComponent,
    ConsultarHistoricoComponent,
    EntregasComponent,
    GerirEncomendasComponent
  ]
})
export class MaterialComponentsModule {}
