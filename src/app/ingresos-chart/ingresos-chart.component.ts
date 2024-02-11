import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import { HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-ingresos-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './ingresos-chart.component.html',
  styleUrl: './ingresos-chart.component.css'
})
export class IngresosChartComponent {
  chart!: Chart;
  constructor() {
    this.chart = new Chart({
      chart: {
        type: 'areaspline',
        backgroundColor: 'transparent'
      },
      title: {
        text: '',
       },
       legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: 0,
        y: 0,
        floating: true,
        borderWidth: 0,
        backgroundColor:'#FFFFFF',
    },
      xAxis: {
        title: {
        text: 'Semana',      
      },
        categories: ['1', '2', '3', '4', '5', '6', '7', '8']
      },
      yAxis: {
        title: {
          text: 'Mis Ingresos'
        },
        min: 0,
        max: 600,
        tickInterval: 100,
      },
      plotOptions: {
        area: {
            pointStart: 0,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 7,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
          },
          areaspline: {
            fillOpacity: 0.3
        }
    },
      series: [{
        type: 'areaspline',
        name: 'Ingreso total',
        data: [300, 500, 400, 150, 400, 50, 350, 100],
        color: '#FF4343'
      },
      {
        type: 'areaspline',
        name: 'Instalado personal',
        data: [100, 90, 300, 90, 100, 70, 180, 100],
        color: '#1DF019'
      }]
    });
  }

}
