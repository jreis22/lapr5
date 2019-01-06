import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http'

import { Config } from '../../config';
import { HistoricoPrecosMaterial } from './historico-precos-material';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class HistoricoMaterialService {

  private url = Config.sicGcUrl + 'HistoricoPrecosMaterial';

  constructor(
    private httpClient: HttpClient) { }

  getHistoricoPrecosMaterial(): Observable<HistoricoPrecosMaterial[]> {
    return this.httpClient.get<HistoricoPrecosMaterial[]>(this.url);
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

  addHistoricoPrecosMaterial(historicoPrecosMaterial: HistoricoPrecosMaterial): Observable<any> {
    return this.httpClient.post(this.url, historicoPrecosMaterial, httpOptions);
  }
}
