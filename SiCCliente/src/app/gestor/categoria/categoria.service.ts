import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http'
import { Config } from '../../config'

import { Categoria } from './categoria';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url = Config.sicGcUrl + 'categoria/';

  constructor(
    private httpClient: HttpClient) { }
  getCategorias(): Observable<any> {
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

  addCategoria(categoria: Categoria): Observable<Categoria> {
    return this.httpClient.post<Categoria>(this.url, categoria, httpOptions);
  }

  updateCategoria(id: number, categoria: Categoria): Observable<any> {
    return this.httpClient.put(this.url + id, categoria, httpOptions);
  }

  deleteCategoria(id: number): Observable<any> {
    return this.httpClient.delete(this.url + id, httpOptions);
  }

}