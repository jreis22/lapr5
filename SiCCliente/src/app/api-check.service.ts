import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCheckService {

  private encUrl = Config.sicEncomendasUrl;

  constructor(private httpClient: HttpClient) { }

  checkSiCEncomendas(): Observable<any> {
    return this.httpClient.get(this.encUrl + 'ping');
  }
}
