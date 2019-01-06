import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
 
import { Colecao } from './colecao';
import { Config } from '../../config';
import { Produto } from '../produto/produto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ColecaoService{
    private url = Config.sicGcUrl + 'colecao';
    constructor(private httpClient: HttpClient) { }
 

    getColecoes(): Observable<Colecao[]>{
      return this.httpClient.get<Colecao[]>(this.url).pipe(
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

    getProdutos(id: number): Observable<any> {
        return this.httpClient.get(this.url + id +'produto').pipe(
          map(this.extractData));
    }

    addColecao(colecao: Colecao): Observable<Colecao> {
        return this.httpClient.post<Colecao>(this.url, colecao, httpOptions);
    }
     
    updateColecao(id: number, colecao:Colecao) {
        alert("Foi editada uma colecao");
        return this.httpClient.put(this.url + id, colecao, httpOptions);
    }
 
    deleteColecao (id :number): Observable<Colecao> {
        return this.httpClient.delete<Colecao>(this.url + id, httpOptions);
      }

      deleteProduto (idC :number, idP:number): Observable<any> {
        return this.httpClient.delete(this.url + idC + '/produto=' + idP);
      }
  
      adicionarProduto (idC :number, idP:number){
        return this.httpClient.put(this.url + idC + '/produto=' + idP,httpOptions);
      }
  }