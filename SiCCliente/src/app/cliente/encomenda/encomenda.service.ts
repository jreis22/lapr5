import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Config } from '../../config';
import { Encomenda } from './encomenda';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EncomendaService {

  private encUrl = Config.sicEncomendasUrl;
  private entregasUrl = Config.sicEntregasUrl;

  constructor(private httpClient: HttpClient) { }

  addEncomenda(encomenda: Encomenda): Observable<Encomenda> {
    return this.httpClient.post<Encomenda>(this.encUrl + 'Encomenda', encomenda, httpOptions);
  }

  getEncomendas(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.encUrl + 'encomenda');
  }

  getCidades(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.entregasUrl + 'listar_cidades');
  }

  getEstadosEncomenda(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.encUrl + 'estadoEncomenda');
  }

  updateEncomenda(encomenda: Encomenda): Observable<Encomenda> {
    console.log(encomenda);
    return this.httpClient.put<Encomenda>(this.encUrl + 'encomenda/' + encomenda._id, encomenda, httpOptions);
  }


  private extractData(res: Response) {
    return res || {};
  }
}
