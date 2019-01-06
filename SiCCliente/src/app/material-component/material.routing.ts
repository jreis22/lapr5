import { Routes, CanActivate } from '@angular/router';

import { ConfiguradorComponent } from './configurador/configurador.component';
import { GerirAcabamentoComponent } from './gerir-acabamento/gerir-acabamento.component';
import { GerirColecoesComponent } from './gerir-colecoes/gerir-colecoes.component';
import { GerirCatalogosComponent } from './gerir-catalogos/gerir-catalogos.component';
import { GerirCategoriaComponent } from './gerir-categoria/gerir-categoria.component';
import { GerirMaterialComponent } from './gerir-material/gerir-material.component';
import { GerirProdutoComponent } from './gerir-produto/gerir-produto.component';
import { ConsultarHistoricoComponent } from './consultar-historico/consultar-historico.component';
import { EntregasComponent } from './entregas/entregas.component';
import { GerirEncomendasComponent } from './gerir-encomendas/gerir-encomendas.component';

import { AuthGuardService } from './../auth-guard.service';

export const MaterialRoutes: Routes = [
  {
    path: 'configurador',
    component: ConfiguradorComponent
  },
  {
    path: 'gerir-acabamento',
    component: GerirAcabamentoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'gerir-categoria',
    component: GerirCategoriaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'gerir-colecoes',
    component: GerirColecoesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'gerir-catalogos',
    component: GerirCatalogosComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'gerir-material',
    component: GerirMaterialComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'gerir-produto',
    component: GerirProdutoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'consultar-historico',
    component: ConsultarHistoricoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'entregas',
    component: EntregasComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'gerir-encomendas',
    component: GerirEncomendasComponent,
    canActivate: [AuthGuardService]
  }
];
