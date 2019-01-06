import { TestBed } from '@angular/core/testing';

import { ColecaoService } from './colecao.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Config } from '../../config';
import { Colecao } from './colecao';

describe('ColecaoService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ColecaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ColecaoService);

  });

  it('should be created', () => {
    const service: ColecaoService = TestBed.get(ColecaoService);
    expect(service).toBeTruthy();
  });

  it('should create a colection', () => {
    let url = Config.sicGcUrl + 'colecao';

    let colecao: Colecao = new Colecao(this.colecao);
    colecao.id = 1;
    colecao.nome = "colecao1";

    service.addColecao(colecao).subscribe(data => {
      expect(data).toEqual(colecao);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('POST');

    req.flush(colecao);

    httpTestingController.verify();
  });

  it('should update a colection', () =>{
      let url = Config.sicGcUrl + 'colecao' + 1;

      let colecao: Colecao = new Colecao(this.colecao);
      colecao.id = 1;
      colecao.nome = "colecao1";

      service.updateColecao(colecao.id, colecao).subscribe(data => {
          expect(data).toEqual(colecao);
      });

      const req = httpTestingController.expectOne(url);

      expect(req.request.method).toEqual('PUT');

      req.flush(colecao);

      httpTestingController.verify();
  });


  it('should delete a colection', () => {

    let url = Config.sicGcUrl + 'colecao' + 1;

    let colecao: Colecao = new Colecao(this.colecao);
    colecao.id = 1;
    colecao.nome = "colecao1";

    service.deleteColecao(colecao.id).subscribe(data => {
      expect(data).toEqual(colecao);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('DELETE');

    req.flush(colecao);

    httpTestingController.verify();

  });

});

