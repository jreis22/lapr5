import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

import { ProdutoItem } from './item';
import { Config } from '../../config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private encUrl = Config.sicEncomendasUrl;
  private gcUrl = Config.sicGcUrl;

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<any> {
    return this.httpClient.get(this.encUrl + 'ItemDeProduto').pipe(
      map(this.extractData));
  }

  getMateriais(idProduto: number): Observable<any> {
      return this.httpClient.get(this.gcUrl + 'Produto/'+ idProduto +'/Materiais').pipe(  
      map(this.extractData));
  } 

  getAcabamentos(idMaterial: number): Observable<any> {
      return this.httpClient.get(this.gcUrl + 'Material/' + idMaterial + '/Acabamentos').pipe(
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

  addItem(item: ProdutoItem): Observable<ProdutoItem> {
    return this.httpClient.post<ProdutoItem>(this.encUrl + 'ItemDeProduto', item, httpOptions);
  }

  deleteItem(_id: string): Observable<ProdutoItem> {
    return this.httpClient.delete<ProdutoItem>(this.encUrl+'ItemDeProduto/' + _id, httpOptions);
  }

  updateItem(item: ProdutoItem): Observable<ProdutoItem> {
    console.log(item);
    return this.httpClient.put<ProdutoItem>(this.encUrl + 'ItemDeProduto/' + item._id, item, httpOptions);
  }

}

