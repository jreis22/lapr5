import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http'

import { Acabamento } from './acabamento';
import { Config } from '../../config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AcabamentoService {

  //private url = 'https://sic20181106055047.azurewebsites.net/api/Acabamento';
  private url = Config.sicGcUrl + 'Acabamento';

  constructor(
    private httpClient: HttpClient) { }

  getAcabamentos(): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      map(this.extractData));
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

  addAcabamento(acabamento: Acabamento): Observable<Acabamento> {
    return this.httpClient.post<Acabamento>(this.url, acabamento, httpOptions);
  }

  updateAcabamento(id: number, acabamento: Acabamento): Observable<any> {
    return this.httpClient.put(this.url + '/' + id, acabamento, httpOptions);
  }

  deleteAcabamento(acabamento: Acabamento): Observable<any> {
    return this.httpClient.delete(this.url + '/' + acabamento.id, httpOptions);
  }

}
