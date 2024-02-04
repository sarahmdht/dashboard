import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiIngresosComponent } from './mi-ingresos.component';

describe('MiIngresosComponent', () => {
  let component: MiIngresosComponent;
  let fixture: ComponentFixture<MiIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiIngresosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
