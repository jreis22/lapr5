import { TestBed } from '@angular/core/testing';

import { ApiCheckService } from './api-check.service';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('ApiCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ApiCheckService = TestBed.get(ApiCheckService);
    expect(service).toBeTruthy();
  });
});
