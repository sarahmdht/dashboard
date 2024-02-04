import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Top20SliderComponent } from '../top-20-slider/top-20-slider.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { InstaladoChartComponent} from '../instalado-chart/instalado-chart.component';

@Component({
  selector: 'app-miperfile',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, Top20SliderComponent, BarChartComponent, InstaladoChartComponent],
  templateUrl: './miperfile.component.html',
  styleUrl: './miperfile.component.css'
})
export class MiperfileComponent {

}
