import { TestBed } from '@angular/core/testing';

import { EncomendaService } from './encomenda.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Config } from '../../config';
import { ProdutoItem } from '../item/item';
import { Encomenda } from './encomenda';

describe('EncomendaService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: EncomendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(EncomendaService);

  });

  it('should be created', () => {
    const service: EncomendaService = TestBed.get(EncomendaService);
    expect(service).toBeTruthy();
  });

  it('should create an encomenda', () => {

    let url = Config.sicEncomendasUrl + 'Encomenda';

    let item: ProdutoItem = new ProdutoItem();
    item.idProduto = 1;
    item.altura = 1.5;
    item.largura = 2;
    item.profundidade = 0.5;
    item.idAcabamento = 45;
    item.idMaterial = 50;

    let encomenda: Encomenda = new Encomenda();
    encomenda.itens.push(item);

    service.addEncomenda(encomenda).subscribe(data => {
      expect(data).toEqual(encomenda);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('POST');

    req.flush(encomenda);

    httpTestingController.verify();

  });

});
