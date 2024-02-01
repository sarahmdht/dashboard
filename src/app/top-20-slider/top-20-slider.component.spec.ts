import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top20SliderComponent } from './top-20-slider.component';

describe('Top20SliderComponent', () => {
  let component: Top20SliderComponent;
  let fixture: ComponentFixture<Top20SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top20SliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top20SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
