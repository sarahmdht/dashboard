import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaDeVentaComponent } from './captura-de-venta.component';

describe('CapturaDeVentaComponent', () => {
  let component: CapturaDeVentaComponent;
  let fixture: ComponentFixture<CapturaDeVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapturaDeVentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapturaDeVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
