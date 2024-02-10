import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Top20SliderComponent } from '../top-20-slider/top-20-slider.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { InstaladoChartComponent} from '../instalado-chart/instalado-chart.component';
import { RouterLink } from '@angular/router';
import { ThemeServicesService } from '../services/theme-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-miperfile',
  standalone: true,
  imports: [HeaderComponent, Top20SliderComponent, BarChartComponent, InstaladoChartComponent, RouterLink, CommonModule],
  templateUrl: './miperfile.component.html',
  styleUrl: './miperfile.component.css'
})
export class MiperfileComponent {
  darkMode = false;

  constructor(private themeService: ThemeServicesService) {}

  ngOnInit(): void {
    this.themeService.darkMode$.subscribe(darkMode => {
      this.darkMode = darkMode;
    });
}
}
