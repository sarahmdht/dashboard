import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosChartComponent } from './ingresos-chart.component';

describe('IngresosChartComponent', () => {
  let component: IngresosChartComponent;
  let fixture: ComponentFixture<IngresosChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresosChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngresosChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
