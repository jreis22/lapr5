import { Injectable } from '@angular/core';
import { IsLoggedIn } from '../../isLoggedIn';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'starter', name: 'Starter Page', type: 'link', icon: 'av_timer' },
  { state: 'configurador', type: 'link', name: 'Configurador', icon: 'settings'}
];

const MENUITEMSGestor = [
  { state: 'starter', name: 'Starter Page', type: 'link', icon: 'av_timer' },
  { state: 'configurador', type: 'link', name: 'Configurador', icon: 'settings'},
  { state: 'gerir-acabamento', type: 'link', name: 'Gerir Acabamento', icon: 'format_paint'},
  { state: 'gerir-material', type: 'link', name: 'Gerir Material', icon: 'texture'},
  { state: 'gerir-categoria', type: 'link', name: 'Gerir Categoria', icon: 'category'},
  { state: 'gerir-colecoes', type: 'link', name: 'Gerir Colecoes', icon: 'collections'},
  { state: 'gerir-catalogos', type: 'link', name: 'Gerir Catalogos', icon: 'view_list'},
  { state: 'gerir-produto', type: 'link', name: 'Gerir Produto', icon: 'map' },
  { state: 'gerir-encomendas', type: 'link', name: 'Gerir Encomendas', icon: 'inbox' },
  { state: 'entregas', type: 'link', name: 'Entregas', icon: 'local_shipping'},
  { state: 'consultar-historico', type: 'link', name: 'Consultar Historico', icon: 'history'}
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    const LoggedIn = IsLoggedIn.Instance;
    if(LoggedIn.isLoggedIn == true) {
      return MENUITEMSGestor;
    }
    return MENUITEMS;
  }
}
