import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguradorComponent } from './configurador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from '../../demo-material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ConfiguradorComponent', () => {
  let component: ConfiguradorComponent;
  let fixture: ComponentFixture<ConfiguradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguradorComponent ],
      imports: [ ReactiveFormsModule, FormsModule, BrowserAnimationsModule, RouterTestingModule, HttpClientModule, DemoMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
