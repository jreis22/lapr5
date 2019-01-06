import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

import { Produto } from './produto';
import { Config } from '../../config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = Config.sicGcUrl + 'produto/';
  constructor(private httpClient: HttpClient) { }
  
  getProdutos(): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      map(this.extractData));
  }

  getArmarios(): Observable<any> {
    return this.httpClient.get(this.url + 'armarios').pipe(
      map(this.extractData)
    );
  }

  getModulosArmario(idProduto: number): Observable<any> {
    return this.httpClient.get(this.url + 'armario/' + idProduto + '/modulos').pipe(
      map(this.extractData)
    );
  }

  getModulosObrigatoriosArmario(idProduto: number): Observable<any> {
    return this.httpClient.get(this.url + 'armario/' + idProduto + '/modulosObrigatorios').pipe(
      map(this.extractData)
    );
  }

  getPartesModulo(idProduto: number): Observable<any> {
    return this.httpClient.get(this.url + 'modulo/' + idProduto + '/partes').pipe(
      map(this.extractData)
    );
  }

  getPartesObrigatoriasModulo(idProduto: number): Observable<any> {
    return this.httpClient.get(this.url + 'modulo/' + idProduto + '/partesObrigatorias').pipe(
      map(this.extractData)
    );
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

  getFilhos(id: number): Observable<any> {
    return this.httpClient.get(this.url + id +'/Partes').pipe(
      map(this.extractData));
  }

  getPais(id: number): Observable<any> {
    return this.httpClient.get(this.url + id +'/PartesEm').pipe(
      map(this.extractData));
  }

  addProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.url, produto, httpOptions);
  }

  updateProduto(id: number, produto: Produto) {
    return this.httpClient.put<Produto>(this.url + id, produto, httpOptions);
  }

  deleteProduto (id :number): Observable<Produto> {
    return this.httpClient.delete<Produto>(this.url + id, httpOptions);
  }

  getMateriais(idProduto: number): Observable<any> {
    return this.httpClient.get(this.url + idProduto +'/Materiais').pipe(  
    map(this.extractData));
  }

}
