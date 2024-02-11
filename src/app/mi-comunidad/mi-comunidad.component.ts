import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeServicesService } from '../services/theme-services.service';

@Component({
  selector: 'app-mi-comunidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-comunidad.component.html',
  styleUrl: './mi-comunidad.component.css'
})
export class MiComunidadComponent {
  isCollapsed = true;
  darkMode = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }


  constructor(private themeService: ThemeServicesService) {}

  ngOnInit(): void {
    this.themeService.darkMode$.subscribe(darkMode => {
      this.darkMode = darkMode;
    });
}
}
