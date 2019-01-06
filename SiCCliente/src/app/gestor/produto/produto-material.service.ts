import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import { ProdutoMaterial } from './produto-material';
import { Config } from '../../config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProdutoMaterialService {

  private url = Config.sicGcUrl + 'ProdutoMaterial/';
  constructor(private httpClient: HttpClient) { }
  getProdutosMateriais(): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      map(this.extractData));
  }

  getProdutoMaterialId(idProduto :number, idMaterial:number): Observable<any> {
    return this.httpClient.get(this.url + idProduto + "/" + idMaterial).pipe(map(this.extractData));
  }

  getProdutoMaterialDeProduto(idProduto: number): Observable<any> {
    return this.httpClient.get(this.url + idProduto + "/" + "Materiais").pipe(map(this.extractData));
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

  addProdutoMaterial(produtoMaterial: ProdutoMaterial): Observable<ProdutoMaterial> {
    return this.httpClient.post<ProdutoMaterial>(this.url, produtoMaterial, httpOptions);
  }

  deleteProdutoMaterial (idProduto :number, idMaterial:number): Observable<ProdutoMaterial> {

    return this.httpClient.delete<ProdutoMaterial>(this.url + idProduto + "/" + idMaterial, httpOptions);
  }


  deleteProdutoMaterialDeProduto(idProduto: number): Observable<ProdutoMaterial> {

    return this.httpClient.delete<ProdutoMaterial>(this.url + idProduto + "/" + "Materiais", httpOptions);
  }

  updateProdutoMaterial(idProduto :number, idMaterial:number, produtoMaterial: ProdutoMaterial): Observable<any> {
    return this.httpClient.put(this.url + idProduto + "/" + idMaterial, produtoMaterial, httpOptions);
  }
}
