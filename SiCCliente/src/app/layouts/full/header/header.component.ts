import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {Router} from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { AuthService } from '../../../auth.service';
import { IsLoggedIn } from '../../../isLoggedIn';
  
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit {
  statusMessage: string;

  //flags
  activateLogout: boolean = false;

  constructor(public auth: AuthService, public snackBar: MatSnackBar, private router: Router, protected localStorage: LocalStorage) {} 
  ngOnInit() {}

  logoutUserHTML(): void {
    this.localStorage.getItem('auth').subscribe((data) => {
      if(data != null)
      {
        this.localStorage.clear().subscribe(() => {});
        this.snackBar.open("Logout realizado com sucesso!", "", { duration: 4000});
        const LoggedIn = IsLoggedIn.Instance;
        LoggedIn.toggleIf();
      }
      this.router.navigate(['./starter']);
      this.activateLogout = false;
    }); 
  }

  checkHTML(): void {
    this.localStorage.getItem('auth').subscribe((data) => {
      if(data != null)
      {
        this.activateLogout = true;
      }  else {
        this.snackBar.open("You need to be logged in!", "", { duration: 4000});
        this.router.navigate(['./starter']);
      }
    });
  }
}