import { TestBed } from '@angular/core/testing';

import { ProdutoService } from './produto.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Config } from '../../config';
import { Produto } from './produto';
import { Categoria } from '../categoria/categoria';
import { Dimensao } from './dimensao';
import { TipoProduto } from './tipo-produto';
import { Material } from '../material/material';

describe('ProdutoService', () => {
  
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ProdutoService);

  });

  it('should be created', () => {
    const service: ProdutoService = TestBed.get(ProdutoService);
    expect(service).toBeTruthy();
  });

  it('should get armarios', () => {

    let url = Config.sicGcUrl + 'produto/armarios';

    let categoria: Categoria = new Categoria();
    categoria.id = 1;
    categoria.descricao = "Cat1";

    let altura: Dimensao = new Dimensao([1,2], 0, 'm');
    let largura: Dimensao = new Dimensao([1,2], 0, 'm');
    let profundidade: Dimensao = new Dimensao([0.5,0.8], 0, 'm');

    let armario: Produto = new Produto("armario1", categoria, altura, largura, profundidade, TipoProduto.Armario);

    let armarios: Produto[] = [];
    armarios.push(armario);

    service.getArmarios().subscribe(data => {
      expect(data).toEqual(armarios);
    });

    const req = httpTestingController.expectOne(url);

      expect(req.request.method).toEqual('GET');

      req.flush(armarios);

      httpTestingController.verify();
    
  });

  it('should get módulos de armario', () => {

    let url = Config.sicGcUrl + 'produto/armario/1/modulos';

    let categoria: Categoria = new Categoria();
    categoria.id = 1;
    categoria.descricao = "Cat1";

    let altura: Dimensao = new Dimensao([0.5,1], 1, 'm');
    let largura: Dimensao = new Dimensao([0.25,0.75], 1, 'm');
    let profundidade: Dimensao = new Dimensao([0.4,0.6], 1, 'm');

    let modulo: Produto = new Produto("produto4", categoria, altura, largura, profundidade, TipoProduto.Armario);

    let modulos: Produto[] = [];
    modulos.push(modulo);

    service.getModulosArmario(1).subscribe(data => {
      expect(data).toEqual(modulos);
    });

    const req = httpTestingController.expectOne(url);

      expect(req.request.method).toEqual('GET');

      req.flush(modulos);

      httpTestingController.verify();
    
  });

  it('should get partes de módulo', () => {

    let url = Config.sicGcUrl + 'produto/modulo/2/partes';

    let categoria: Categoria = new Categoria();
    categoria.id = 1;
    categoria.descricao = "Cat1";

    let altura: Dimensao = new Dimensao([0.4,0.9], 1, 'm');
    let largura: Dimensao = new Dimensao([0.1,0.5], 1, 'm');
    let profundidade: Dimensao = new Dimensao([0.3,0.5], 1, 'm');

    let parte: Produto = new Produto("produto5", categoria, altura, largura, profundidade, TipoProduto.Armario);

    let partes: Produto[] = [];
    partes.push(parte);

    service.getPartesModulo(2).subscribe(data => {
      expect(data).toEqual(partes);
    });

    const req = httpTestingController.expectOne(url);

      expect(req.request.method).toEqual('GET');

      req.flush(partes);

      httpTestingController.verify();
    
  });

  it('should get materiais de produto', () => {

    let url = Config.sicGcUrl + 'produto/1/Materiais';

    let material: Material = new Material();
    material.id = 4;
    material.tipo = "Mat1";
    material.precoBase = 9;

    let materiais: Material[] = [];
    materiais.push(material);

    service.getMateriais(1).subscribe(data => {
      expect(data).toEqual(materiais);
    });

    const req = httpTestingController.expectOne(url);

      expect(req.request.method).toEqual('GET');

      req.flush(materiais);

      httpTestingController.verify();
    
  });

});
