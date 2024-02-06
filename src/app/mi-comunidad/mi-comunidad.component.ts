import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-comunidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-comunidad.component.html',
  styleUrl: './mi-comunidad.component.css'
})
export class MiComunidadComponent {
  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
