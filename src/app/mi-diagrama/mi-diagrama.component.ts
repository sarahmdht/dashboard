import { Component } from '@angular/core';
import { ThemeServicesService } from '../services/theme-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-diagrama',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-diagrama.component.html',
  styleUrl: './mi-diagrama.component.css'
})
export class MiDiagramaComponent {
  darkMode = false;

  constructor(private themeService: ThemeServicesService) {}

  ngOnInit(): void {
    this.themeService.darkMode$.subscribe(darkMode => {
      this.darkMode = darkMode;
    });
}
}
