import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirProdutoComponent } from './gerir-produto.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from '../../demo-material-module';

describe('GerirProdutoComponent', () => {
  let component: GerirProdutoComponent;
  let fixture: ComponentFixture<GerirProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerirProdutoComponent ],
      imports: [ 
        ReactiveFormsModule, 
        FormsModule, 
        BrowserAnimationsModule, 
        RouterTestingModule, 
        HttpClientModule, 
        DemoMaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerirProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
