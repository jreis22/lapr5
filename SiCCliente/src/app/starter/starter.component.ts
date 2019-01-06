import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StarterService } from './starter.service';
import { Utilizador } from './Utilizador';
import { TipoUtilizador } from './TipoUtilizador';
import { Router } from "@angular/router";
import { LocalStorage } from '@ngx-pwa/local-storage';
import { AuthService } from '../auth.service';
import { IsLoggedIn } from '../isLoggedIn';
  
@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements OnInit {
  statusMessage: string;
  aceitarTermos: boolean = false;

  //update
  emailLogin: string;
  passwordLogin: string;
  otpLogin: string;
  emailRegister: string;
  passwordRegister: string;

  //flags
  activate: boolean = false;

  //Static
  tipo: TipoUtilizador.Cliente;

  constructor(private starterSrv: StarterService, public snackBar: MatSnackBar, private router: Router,
    protected localStorage: LocalStorage, public dialog: MatDialog) { }
  ngOnInit() { }

  loginUserHTML(): void {
    let email = this.emailLogin;
    if (!email) {
      this.snackBar.open("Por favor preencha os campos obrigatorios.", "", { duration: 4000 }); return;
    }
    let password = this.passwordLogin;
    if (this.activate) {
      let OTP = this.otpLogin;
      let tipoUtilizador: TipoUtilizador;
      tipoUtilizador = this.tipo;
      this.starterSrv.loginUserOTP({ email, password, OTP, tipoUtilizador } as Utilizador).subscribe(
        utilizador => {
          this.snackBar.open("Login Realizado!", "", { duration: 4000 });
          let loggedEmail: string = email;
          this.localStorage.setItem('auth', loggedEmail).subscribe(() => {});
          this.starterSrv.getTipoUtilizador(email).subscribe(tipoAtual => {
          let tipoString: string = tipoAtual.toString();
          if(tipoString == "Gestor")
          {
            const LoggedIn = IsLoggedIn.Instance;
            LoggedIn.toggle();
          }
          });
          this.router.navigate(['./configurador']);
        },
        erro => {
          this.snackBar.open("Erro! Something went wrong!", erro.error, { duration: 4000 });
          console.log(erro);
        });
    } else {
      let OTP: string;
      let tipoUtilizador: TipoUtilizador;
      tipoUtilizador = this.tipo;
      this.starterSrv.loginUser({ email, password, OTP, tipoUtilizador } as Utilizador).subscribe(
        _ => {
          this.snackBar.open("A one time password was sent to your email!", "", { duration: 4000 });
          this.activate = true;
        },
        erro => {
          this.snackBar.open("Erro!", erro.error, { duration: 4000 });
          console.log(erro);
        });
    }
  }

  registerUserHTML(): void {
    if(this.aceitarTermos==false){
      this.snackBar.open("Aceite os Termos de Uso", "", { duration: 4000 });
      return;
    }
    let email = this.emailRegister;
    let password = this.passwordRegister;
    let OTP: string = "";
    let tipoUtilizador: TipoUtilizador;
    tipoUtilizador = this.tipo;
    this.starterSrv.registerUser({ email, password, OTP, tipoUtilizador } as Utilizador).subscribe(
      utilizador => {
        this.snackBar.open("Utilizador registado com sucesso! Pode agora fazer login com a sua nova conta!", "", { duration: 4000 });
      },
      erro => {
        this.snackBar.open("Erro!", erro.error, { duration: 4000 });
        console.log(erro);
      });
  }

  abrirTermosDeUso(): void {
    const dialogRef = this.dialog.open(TermosDeUso, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined)
        this.aceitarTermos = result;
    });
  }
}

@Component({
  selector: 'termos-de-uso',
  templateUrl: 'termos-de-uso.html',
})
export class TermosDeUso {

  constructor(
    public dialogRef: MatDialogRef<TermosDeUso>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

