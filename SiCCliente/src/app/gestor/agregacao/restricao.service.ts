import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Restricao } from './restricao';
import { Config } from '../../config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RestricaoService {

  private url = Config.sicGcUrl + 'restricao/';
  constructor(private httpClient: HttpClient) { }
  getRestricoes(): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      map(this.extractData));
  }

  getRestricaoId(idPai: number, idFilho: number): Observable<any> {
    return this.httpClient.get(this.url + idPai + "/" + idFilho).pipe(map(this.extractData));
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

  addRestricao(Restricao: Restricao): Observable<Restricao> {
    return this.httpClient.post<Restricao>(this.url, Restricao, httpOptions);
  }

  deleteRestricao(id: number): Observable<Restricao> {

    return this.httpClient.delete<Restricao>(this.url + id, httpOptions);
  }

  deleteRestricoesDeProduto(id: number): Observable<Restricao> {

    return this.httpClient.delete<any>(this.url + id + "/restricoes", httpOptions);
  }

  updateRestricao(id: number, Restricao: Restricao): Observable<any> {
    return this.httpClient.put(this.url + id, Restricao, httpOptions);
  }
}
