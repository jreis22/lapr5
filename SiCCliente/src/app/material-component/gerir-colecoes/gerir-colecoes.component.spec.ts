import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirColecoesComponent } from './gerir-colecoes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from '../../demo-material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ColecaoComponent', () => {
  let component: GerirColecoesComponent;
  let fixture: ComponentFixture<GerirColecoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerirColecoesComponent ],
      imports: [ ReactiveFormsModule, FormsModule, BrowserAnimationsModule, RouterTestingModule, HttpClientModule, DemoMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerirColecoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
