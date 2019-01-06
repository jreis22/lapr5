import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarHistoricoComponent } from './consultar-historico.component';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ConsultarHistoricoComponent', () => {
  let component: ConsultarHistoricoComponent;
  let fixture: ComponentFixture<ConsultarHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarHistoricoComponent ],
      imports: [
        RouterTestingModule, 
        HttpClientModule,
        MatPaginatorModule,
        MatTableModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
