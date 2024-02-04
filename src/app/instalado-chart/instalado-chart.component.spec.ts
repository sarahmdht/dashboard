import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaladoChartComponent } from './instalado-chart.component';

describe('InstaladoChartComponent', () => {
  let component: InstaladoChartComponent;
  let fixture: ComponentFixture<InstaladoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstaladoChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstaladoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
