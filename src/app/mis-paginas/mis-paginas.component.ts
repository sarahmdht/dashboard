import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeServicesService } from '../services/theme-services.service';

@Component({
  selector: 'app-mis-paginas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-paginas.component.html',
  styleUrl: './mis-paginas.component.css'
})
export class MisPaginasComponent {
 
  isCollapsed = true;
  darkMode = false;
 
  constructor(private themeService: ThemeServicesService) {}
  
  ngOnInit(): void {
    this.themeService.darkMode$.subscribe(darkMode => {
      this.darkMode = darkMode;
    });
  }
 
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
