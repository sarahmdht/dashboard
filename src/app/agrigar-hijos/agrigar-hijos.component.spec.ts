import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrigarHijosComponent } from './agrigar-hijos.component';

describe('AgrigarHijosComponent', () => {
  let component: AgrigarHijosComponent;
  let fixture: ComponentFixture<AgrigarHijosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrigarHijosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgrigarHijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
