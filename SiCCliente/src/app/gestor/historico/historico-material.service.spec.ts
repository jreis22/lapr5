import { TestBed } from '@angular/core/testing';

import { HistoricoMaterialService } from './historico-material.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('HistoricoMaterialService', () => {
  
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: HistoricoMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(HistoricoMaterialService);

  });

  it('should be created', () => {
    const service: HistoricoMaterialService = TestBed.get(HistoricoMaterialService);
    expect(service).toBeTruthy();
  });
});
