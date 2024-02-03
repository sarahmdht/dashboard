import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-paginas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-paginas.component.html',
  styleUrl: './mis-paginas.component.css'
})
export class MisPaginasComponent {
  constructor(){
  
  }
  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
