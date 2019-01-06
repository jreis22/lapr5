import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import { Config } from '../config';
import { Utilizador } from './Utilizador';
import { TipoUtilizador } from './TipoUtilizador';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class StarterService{
    private urlLogin = Config.sicGcUrl + 'Login';
    private urlRegister = Config.sicGcUrl + 'Register';
    private urlLoginOTP = Config.sicGcUrl + 'Login/OTP';

    constructor(private httpClient: HttpClient) { }

    private extractData(res: Response) {
        return res || {};
    }

    private handleError(err: HttpErrorResponse) {
        if (err.error instanceof ErrorEvent) {
          console.error('An error occurred: ', err.error.message);
        }
        else {
          console.error(
            `Web Api returned code ${err.status}, ` + ` Response body was: ${err.error}`
          );
        }
        return Observable.throw(err);
    }

    loginUser(utilizador: Utilizador): Observable<Utilizador> {
      return this.httpClient.post<Utilizador>(this.urlLogin, utilizador, httpOptions);
    }

    loginUserOTP(utilizador: Utilizador): Observable<Utilizador> {
      return this.httpClient.post<Utilizador>(this.urlLoginOTP, utilizador, httpOptions);
    }

    registerUser(utilizador: Utilizador): Observable<Utilizador> {
      return this.httpClient.post<Utilizador>(this.urlRegister, utilizador, httpOptions);
    }

    getTipoUtilizador(email: string): Observable<TipoUtilizador> {
      return this.httpClient.get<TipoUtilizador>(this.urlLogin + '/' + email);
    }

    getIdUtilizador(email: any): Observable<number> {
      return this.httpClient.get<number>(this.urlLoginOTP + '/' + email);  
    }

  }