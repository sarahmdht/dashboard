import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiDiagramaComponent } from './mi-diagrama.component';

describe('MiDiagramaComponent', () => {
  let component: MiDiagramaComponent;
  let fixture: ComponentFixture<MiDiagramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiDiagramaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiDiagramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
