import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiperfileComponent } from './miperfile.component';

describe('MiperfileComponent', () => {
  let component: MiperfileComponent;
  let fixture: ComponentFixture<MiperfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiperfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiperfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
