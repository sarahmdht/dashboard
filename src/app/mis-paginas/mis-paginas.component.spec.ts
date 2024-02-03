import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPaginasComponent } from './mis-paginas.component';

describe('MisPaginasComponent', () => {
  let component: MisPaginasComponent;
  let fixture: ComponentFixture<MisPaginasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisPaginasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisPaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
