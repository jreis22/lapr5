import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StarterComponent } from './starter.component';
import { StarterRoutes } from './starter.routing';
import { FormsModule } from '@angular/forms';
import { ConfiguradorModule } from '../material-component/configurador/configurador.module';
import { AuthGuardService } from '../auth-guard.service';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ConfiguradorModule,
    RouterModule.forChild(StarterRoutes)
  ],
  providers: [AuthGuardService, AuthService],
  declarations: [StarterComponent]
})
export class StarterModule {}
