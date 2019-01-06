import { TestBed } from '@angular/core/testing';

import { AcabamentoService } from './acabamento.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Config } from '../../config';
import { Acabamento } from './acabamento';

describe('AcabamentoService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: AcabamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(AcabamentoService);

  });

  it('should be created', () => {
    const service: AcabamentoService = TestBed.get(AcabamentoService);
    expect(service).toBeTruthy();
  });

  it('should create an acabamento', () => {
    let url = Config.sicGcUrl + 'Acabamento';

    let acabamento: Acabamento = new Acabamento();
    acabamento.tipo = 'acabamento1';
    acabamento.metalicidade = 0.5;
    acabamento.rugosidade = 0.5;
    acabamento.emissividade = '#42f4d1';

    service.addAcabamento(acabamento).subscribe(data => {
      expect(data).toEqual(acabamento);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('POST');

    req.flush(acabamento);

    httpTestingController.verify();
  });

  it('should update an acabamento', () => {

    let url = Config.sicGcUrl + 'Acabamento/' + 1;

    let acabamento: Acabamento = new Acabamento();
    acabamento.id = 1;
    acabamento.tipo = 'acabamento2';
    acabamento.metalicidade = 1;
    acabamento.rugosidade = 1;
    acabamento.emissividade = '#ffffff';

    service.updateAcabamento(acabamento.id, acabamento).subscribe(data => {
      expect(data).toEqual(acabamento);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('PUT');

    req.flush(acabamento);

    httpTestingController.verify();

  });

  it('should delete an acabamento', () => {

    let url = Config.sicGcUrl + 'Acabamento/' + 1;

    let acabamento: Acabamento = new Acabamento();
    acabamento.id = 1;
    acabamento.tipo = 'acabamento2';
    acabamento.metalicidade = 1;
    acabamento.rugosidade = 1;
    acabamento.emissividade = '#ffffff';

    service.deleteAcabamento(acabamento).subscribe(data => {
      expect(data).toEqual(acabamento);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('DELETE');

    req.flush(acabamento);

    httpTestingController.verify();

  });

});

