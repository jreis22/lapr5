import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirMaterialComponent } from './gerir-material.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from '../../demo-material-module';

describe('GerirMaterialComponent', () => {
  let component: GerirMaterialComponent;
  let fixture: ComponentFixture<GerirMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerirMaterialComponent ],
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
    fixture = TestBed.createComponent(GerirMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
