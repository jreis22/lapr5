import { TestBed } from '@angular/core/testing';

import { MaterialService } from './material.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Config } from '../../config';
import { Acabamento } from '../acabamento/acabamento';
import { Material } from './material';
import { MaterialAcabamento } from './materialAcabamento';

describe('MaterialService', () => {
  
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: MaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(MaterialService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get acabamentos de material', () => {

    let url = Config.sicGcUrl + 'Material/4/Acabamentos';

    let acabamento: Acabamento = new Acabamento();
    acabamento.id = 1;
    acabamento.tipo = 'acabamento1';
    acabamento.emissividade = '#42f4d1';
    acabamento.metalicidade = 0.8;
    acabamento.rugosidade = 0.7;

    let acabamentos: Acabamento[] = [];
    acabamentos.push(acabamento);

    service.getAcabamentosMaterial(4).subscribe(data => {
      expect(data).toEqual(acabamentos);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('GET');

    req.flush(acabamentos);

    httpTestingController.verify();
    
  });

  it('should create a material', () => {
    
    let url = Config.sicGcUrl + 'Material';

    let material: Material = new Material();
    material.tipo = 'material1';
    material.textura = new File([], "");
    material.precoBase = 3.99;

    service.addMaterial(material).subscribe(data => {
      expect(data).toEqual(material);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('POST');

    req.flush(material);

    httpTestingController.verify();
  });

  it('should update a material', () => {

    let url = Config.sicGcUrl + 'Material/' + 1;

    let material: Material = new Material();
    material.id = 1;
    material.tipo = 'material2';
    material.precoBase = 4;

    service.updateMaterial(material.id, material).subscribe(data => {
      expect(data).toEqual(material);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('PUT');

    req.flush(material);

    httpTestingController.verify();

  });

  it('should delete a material', () => {

    let url = Config.sicGcUrl + 'Material/' + 1;

    let material: Material = new Material();
    material.id = 1;
    material.tipo = 'material2';
    material.precoBase = 4;

    service.deleteMaterial(material).subscribe(data => {
      expect(data).toEqual(material);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('DELETE');

    req.flush(material);

    httpTestingController.verify();

  });

  it('should create MaterialAcabamento', () => {

    let url = Config.sicGcUrl + 'MaterialAcabamento';

    let materialAcabamento: MaterialAcabamento = new MaterialAcabamento();
    materialAcabamento.acabamentoId = 1;
    materialAcabamento.materialId = 1;

    service.addMaterialAcabamento(materialAcabamento).subscribe(data => {
      expect(data).toEqual(materialAcabamento);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('POST');

    req.flush(materialAcabamento);

    httpTestingController.verify();

  });

  it('should delete MaterialAcabamento', () => {

    let url = Config.sicGcUrl + 'MaterialAcabamento/' + 2 + '/' + 1;

    let materialAcabamento: MaterialAcabamento = new MaterialAcabamento();
    materialAcabamento.acabamentoId = 1;
    materialAcabamento.materialId = 2;

    service.deleteMaterialAcabamento(materialAcabamento).subscribe(data => {
      expect(data).toEqual(materialAcabamento);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('DELETE');

    req.flush(materialAcabamento);

    httpTestingController.verify();

  });

});
