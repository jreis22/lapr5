import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirCatalogosComponent } from './gerir-catalogos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from '../../demo-material-module';

describe('GerirCatalogosComponent', () => {
  let component: GerirCatalogosComponent;
  let fixture: ComponentFixture<GerirCatalogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerirCatalogosComponent ],
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
    fixture = TestBed.createComponent(GerirCatalogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
