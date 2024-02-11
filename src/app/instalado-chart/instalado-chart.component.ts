import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';



@Component({
  selector: 'app-instalado-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './instalado-chart.component.html',
  styleUrl: './instalado-chart.component.css'
})
export class InstaladoChartComponent {
  chart!: Chart;
  constructor() {
    this.chart = new Chart({
      chart: {
        type: 'column',
        backgroundColor: 'transparent'
      },
      plotOptions: {
        column: {
          borderRadius: 10
      }
    },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['Dec 11', 'Dec 11', 'Dec 11', 'Dec 11', 'Dec 11',
         'Dec 11', 'Dec 11', 'Dec 11', 'Dec 11', 'Dec 11', 'Dec 11',],
      },
      yAxis: {
        min: 0,
        max: 4000,
        tickInterval: 1000,
        title: undefined
      },
      series: [
        {
          name: '',
          data: [
            { y: 2000, color: '#92C5FC' },
            { y: 3000, color: '#92C5FC' },
            { y: 3500, color: '#92C5FC' },
            { y: 2300, color: '#92C5FC' },
            { y: 1800, color: '#92C5FC' },
            { y: 2800, color: '#4865FF' },
            { y: 3800, color: '#4865FF' },
            { y: 2700, color: '#4865FF' },
            { y: 3400, color: '#4865FF' },
            { y: 2100, color: '#4865FF' },
            { y: 2950, color: '#4865FF' },
            { y: 1400, color: '#4865FF' },
          ],
          type: 'column'
        }
      ],
      legend: {
        enabled: false // Disable legend
      },
      title: {
        text: 'Instalado Propio Por Fecha Inicio',
      },
    });
  }
}