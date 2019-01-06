import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirAcabamentoComponent } from './gerir-acabamento.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from '../../demo-material-module';
import { ColorPickerModule } from 'ngx-color-picker';

describe('GerirAcabamentoComponent', () => {
  let component: GerirAcabamentoComponent;
  let fixture: ComponentFixture<GerirAcabamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerirAcabamentoComponent ],
      imports: [ 
        ReactiveFormsModule, 
        FormsModule, 
        BrowserAnimationsModule, 
        RouterTestingModule, 
        HttpClientModule, 
        DemoMaterialModule,
        ColorPickerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerirAcabamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
