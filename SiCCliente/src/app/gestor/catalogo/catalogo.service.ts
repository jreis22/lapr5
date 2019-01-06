import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

import { Catalogo } from './catalogo';
import { Config } from '../../config';
import { Produto } from '../produto/produto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class CatalogoService{
    private url = Config.sicGcUrl + 'catalogo/';
    constructor(private httpClient: HttpClient) { }
    
    /*getCatalogos(): Observable<any> {
      return this.httpClient.get(this.url).pipe(
        map(this.extractData));
    
    }*/

    getCatalogos(): Observable<Catalogo[]> {
      return this.httpClient.get<Catalogo[]>(this.url).pipe(
        catchError(this.handleError)
      );;
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

    getProdutos(id: number): Observable<Produto[]> {
        return this.httpClient.get<Produto[]>(this.url + id +'/produtos').pipe(
          catchError(this.handleError)
      );;
    }

    addCatalogo(catalogo: Catalogo): Observable<Catalogo> {
        return this.httpClient.post<Catalogo>(this.url, catalogo, httpOptions);
    }
     
    updateCatalogo(id: number, catalogo:Catalogo) : Observable<any> {
        return this.httpClient.put(this.url + id, catalogo, httpOptions);
    }
 
    deleteCatalogo (id :number): Observable<any> {
      return this.httpClient.delete(this.url + id, httpOptions);
    }

    deleteProduto (idC :number, idP:number): Observable<any> {
      return this.httpClient.delete(this.url + idC + '/produto=' + idP);
    }

    adicionarProduto (idC :number, idP:number){
      return this.httpClient.put(this.url + idC + '/produto=' + idP,httpOptions);
    }

  }