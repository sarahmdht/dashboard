import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresosChartComponent } from '../ingresos-chart/ingresos-chart.component';

@Component({
  selector: 'app-mi-ingresos',
  standalone: true,
  imports: [CommonModule, IngresosChartComponent],
  templateUrl: './mi-ingresos.component.html',
  styleUrl: './mi-ingresos.component.css'
})
export class MiIngresosComponent {

  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
