import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresosChartComponent } from '../ingresos-chart/ingresos-chart.component';
import { ThemeServicesService } from '../services/theme-services.service';

@Component({
  selector: 'app-mi-ingresos',
  standalone: true,
  imports: [CommonModule, IngresosChartComponent],
  templateUrl: './mi-ingresos.component.html',
  styleUrl: './mi-ingresos.component.css'
})
export class MiIngresosComponent {

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
