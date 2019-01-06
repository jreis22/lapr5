import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Config } from '../../config';
import { ProdutoItem } from './item';

describe('ItemService', () => {
  
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ItemService);
  });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should create an item', () => {

      let url = Config.sicEncomendasUrl + 'ItemDeProduto';

      let item: ProdutoItem = new ProdutoItem();
      item.idProduto = 2;
      item.idMaterial = 4;
      item.idAcabamento = 1;
      item.largura = 0.25;
      item.altura = 1;
      item.profundidade = 0.8;

      service.addItem(item).subscribe(data => {
        expect(data).toEqual(item);
      });

      const req = httpTestingController.expectOne(url);

      expect(req.request.method).toEqual('POST');

      req.flush(item);

      httpTestingController.verify();

    });

    it('should update an item', () => {

      let url = Config.sicEncomendasUrl + 'ItemDeProduto/' + "5c2688e26813c3057e87de30";

      let item: ProdutoItem = new ProdutoItem();
      item._id = "5c2688e26813c3057e87de30";
      item.idProduto = 2;
      item.idMaterial = 4;
      item.idAcabamento = 1;
      item.largura = 1;
      item.altura = 2;
      item.profundidade = 0.5;

      let filho: ProdutoItem = new ProdutoItem();
      filho.idProduto = 5;
      filho.idMaterial = 4;
      filho.idAcabamento = 1;
      filho.largura = 0.25;
      filho.altura = 1;
      filho.profundidade = 0.5;

      item.filhos.push(filho);

      service.updateItem(item).subscribe(data => {
        expect(data).toEqual(item);
      });

      const req = httpTestingController.expectOne(url);

      expect(req.request.method).toEqual('PUT');

      req.flush(item);

      httpTestingController.verify();

    });

    it('should delete an item', () => {

      let url = Config.sicEncomendasUrl + 'ItemDeProduto/' + "5c2688e26813c3057e87de30";

      let item: ProdutoItem = new ProdutoItem();
      item._id = "5c2688e26813c3057e87de30";
      item.idProduto = 2;
      item.idMaterial = 4;
      item.idAcabamento = 1;
      item.largura = 0.25;
      item.altura = 1;
      item.profundidade = 0.8;

      service.deleteItem(item._id).subscribe(data => {
        expect(data).toEqual(item);
      });

      const req = httpTestingController.expectOne(url);

      expect(req.request.method).toEqual('DELETE');

      req.flush(item);

      httpTestingController.verify();

    });

});
