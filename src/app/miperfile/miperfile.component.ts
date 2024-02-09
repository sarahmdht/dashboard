import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Top20SliderComponent } from '../top-20-slider/top-20-slider.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { InstaladoChartComponent} from '../instalado-chart/instalado-chart.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-miperfile',
  standalone: true,
  imports: [HeaderComponent, Top20SliderComponent, BarChartComponent, InstaladoChartComponent, RouterLink],
  templateUrl: './miperfile.component.html',
  styleUrl: './miperfile.component.css'
})
export class MiperfileComponent {

}
