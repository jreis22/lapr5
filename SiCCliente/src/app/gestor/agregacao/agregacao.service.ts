import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Agregacao } from './agregacao';
import { Config } from '../../config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AgregacaoService {

  private url = Config.sicGcUrl + 'produtoproduto/';
  constructor(private httpClient: HttpClient) { }
  getAgregacoes(): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      map(this.extractData));
  }

  getAgregacaoId(idPai: number, idFilho: number): Observable<any> {
    return this.httpClient.get(this.url + idPai + "/" + idFilho).pipe(map(this.extractData));
  }

  getAgregacaoDePai(idPai: number): Observable<any> {
    return this.httpClient.get(this.url + idPai + "/" + "produtosFilho").pipe(map(this.extractData));
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

  addagregacao(agregacao: Agregacao): Observable<Agregacao> {
    return this.httpClient.post<Agregacao>(this.url, agregacao, httpOptions);
  }

  deleteAgregacao(idPai: number, idFilho: number): Observable<Agregacao> {

    return this.httpClient.delete<Agregacao>(this.url + idPai + "/" + idFilho, httpOptions);
  }

  updateAgregacao(idPai: number, idFilho: number, agregacao: Agregacao): Observable<any> {
    return this.httpClient.put(this.url + "/" + idFilho, agregacao, httpOptions);
  }
}
