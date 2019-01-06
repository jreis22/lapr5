import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

import { Itinerario } from './itinerario';
import { Config } from '../../config';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class EntregaService{

    private entregasUrl = Config.sicEntregasUrl;
    private encomendasUrl = Config.sicEncomendasUrl;

    constructor(private httpClient: HttpClient) { }

    getItinerarios(): Observable<Itinerario[]>{
      return this.httpClient.get<Itinerario[]>(this.encomendasUrl + 'itinerario').pipe(
        catchError(this.handleError)
      );
    }

    getCidades(): Observable<string[]> {
      return this.httpClient.get<string[]>(this.entregasUrl + 'listar_cidades');
    }
 
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
  }