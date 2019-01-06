import { Routes } from '@angular/router';

import { StarterComponent } from './starter.component';
import { ConfiguradorComponent } from '../material-component/configurador/configurador.component';

export const StarterRoutes: Routes = [
  {
    path: '',
    component: StarterComponent
  },
  {
    path: 'configurador',
    loadChildren:
          '../material-component/configurador/configurador.component'
  }
]; 
