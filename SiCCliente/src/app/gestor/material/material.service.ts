import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http'

import { Material } from './material';
import { Config } from '../../config';
import { Acabamento } from '../acabamento/acabamento';
import { MaterialAcabamento } from './materialAcabamento';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private url = Config.sicGcUrl + 'Material';

  constructor(
    private httpClient: HttpClient) { }

  getMateriais(): Observable<any> {
    return this.httpClient.get(this.url).pipe(map(this.extractData));
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

  addMaterial(material: Material): Observable<any> {
    const fd = new FormData();
    fd.append('tipo', material.tipo);
    fd.append('precoBase', material.precoBase.toString());
    fd.append('textura', material.textura, material.textura.name);
    return this.httpClient.post(this.url, fd);
  }

  updateMaterial(id: number, material: Material): Observable<any> {
    const fd = new FormData();
    fd.append('tipo', material.tipo);
    fd.append('precoBase', material.precoBase.toString());
    fd.append('textura', material.textura, material.textura == null ? "" : material.textura.name);
    return this.httpClient.put(this.url + '/' + id, fd);
  }

  getAcabamentosMaterial(idMaterial: number): Observable<Acabamento[]> {
    return this.httpClient.get<Acabamento[]>(this.url + '/' + idMaterial + "/Acabamentos");
  }

  deleteMaterial(material: Material): Observable<any> {
    return this.httpClient.delete(this.url + '/' + material.id, httpOptions);
  }

  addMaterialAcabamento(materialAcabamento: MaterialAcabamento): Observable<any> {
    return this.httpClient.post<MaterialAcabamento>(this.url + 'Acabamento', materialAcabamento, httpOptions);
  }

  getMaterialAcabamento(idMaterial: number, idAcabamento: number): Observable<any> {
    return this.httpClient.get<MaterialAcabamento>(this.url + 'Acabamento' + '/' + idMaterial + '/' + idAcabamento);
  }

  deleteMaterialAcabamento(materialAcabamento: MaterialAcabamento): Observable<any> {
    return this.httpClient.delete(this.url + 'Acabamento/' + materialAcabamento.materialId + '/' + materialAcabamento.acabamentoId, httpOptions);
  }

  addIncremento(materialAcabamento: MaterialAcabamento): Observable<any>{
    var matAcabamento = this.httpClient.get<MaterialAcabamento[]>(this.url + 'Acabamento/' + materialAcabamento.materialId + '/' + materialAcabamento.acabamentoId, httpOptions);
    if(matAcabamento != null){
      this.httpClient.delete(this.url + 'Acabamento/' + materialAcabamento.materialId + '/' + materialAcabamento.acabamentoId, httpOptions);    
      return this.httpClient.post<MaterialAcabamento>(this.url + 'Acabamento', materialAcabamento, httpOptions);        
    }
    return this.httpClient.post<MaterialAcabamento>(this.url + 'Acabamento', materialAcabamento, httpOptions);    
  }

}