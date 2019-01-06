import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirEncomendasComponent } from './gerir-encomendas.component';
import { MatListModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from '../../demo-material-module';

describe('GerirEncomendasComponent', () => {
  let component: GerirEncomendasComponent;
  let fixture: ComponentFixture<GerirEncomendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerirEncomendasComponent ],
      imports: [ ReactiveFormsModule, FormsModule, BrowserAnimationsModule, RouterTestingModule, HttpClientModule, DemoMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerirEncomendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
