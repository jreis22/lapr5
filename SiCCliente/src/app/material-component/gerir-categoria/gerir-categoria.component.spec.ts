import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirCategoriaComponent } from './gerir-categoria.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from '../../demo-material-module';

describe('GerirCategoriaComponent', () => {
  let component: GerirCategoriaComponent;
  let fixture: ComponentFixture<GerirCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerirCategoriaComponent ],
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
    fixture = TestBed.createComponent(GerirCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
