import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import { wrap } from 'highcharts';



@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent {
  chart!: Chart;
  value: any;
  constructor() {
    this.chart = new Chart({
      chart: {
        type: 'column',
        backgroundColor: 'transparent'
      },
      plotOptions: {
        column: {
          borderRadius: 7
      }
    },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['Anayeli Bautista', 'Carlos Antonio Gallegos', 'Hector Jesus flores',
        'Angelo Alexander Guiterrez','Karla Zaide Rodriguez','Roy Heberth Tupac', 
        'Pamela Geogriana Quitana','Arlette Lilian Mata'],
        labels: {
          style: {
            },
          autoRotationLimit:20,
          },

        },
      
      yAxis: {
        min: 0,
        max: 1200,
        tickInterval: 100,
        title: undefined
      },
      series: [
        {
          name: '',
          data: [
            { y: 850, color: '#548FC9' },
            { y: 700, color: '#548FC9' },
            { y: 600, color: '#66B741' },
            { y: 550, color: '#66B741' },
            { y: 500, color: '#66B741' },
            { y: 500, color: '#F2E255' },
            { y: 500, color: '#F2E255' },
            { y: 0, color: '#F2E255' },
          ],
          type: 'column'
        }
      ],
      legend: {
        enabled: false // Disable legend
      },
      title: {
        text: undefined // Disable legend
      },
      
    });
  }
}