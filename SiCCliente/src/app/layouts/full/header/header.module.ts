import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from '../../../auth-guard.service';
import { AuthService } from '../../../auth.service';
import { AppHeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AuthGuardService, AuthService],
  declarations: []
})
export class AppHeaderModule { }