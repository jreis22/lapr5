import { TestBed } from '@angular/core/testing';

import { CatalogoService } from './catalogo.service';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('CatalogoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CatalogoService = TestBed.get(CatalogoService);
    expect(service).toBeTruthy();
  });
});
