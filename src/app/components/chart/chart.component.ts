import { DataUtils } from './../../utils/data.utils';
import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { TravelInfo } from '../../models/travel-info.model';
import { Chart, ChartData, Point } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {

  @Input() travelInfos: TravelInfo[] = [];
  canvas: any;
  chart: any;

  labels: string[] = [];
  travelTimes: number[] = [];

  constructor(public dataUtils: DataUtils,
    private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.labels = this.travelInfos.map((info) => {
      return this.dataUtils.formatDepartureTime(info.departureTime);
    });

    this.travelTimes = this.travelInfos.map((info) => {
      if (info.durationInTraffic != null) {
        return this.dataUtils.convertSecondsToMinutes(info.durationInTraffic);
      }
      return this.dataUtils.convertSecondsToMinutes(info.duration);
    });

    this.canvas = document.getElementById('canvas');
    this.chart = this.canvas.getContext('2d');
    const myChart = new Chart(this.chart, {
      type: 'horizontalBar',
      data: {
        labels: this.labels,
        datasets: [{
          data: this.travelTimes,
          backgroundColor: 'rgba(255, 64, 0, 0.2)',
          borderColor: 'rgba(255, 0, 0, 1)'
        }]
      },
      options: {
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              let label = data.datasets[tooltipItem.datasetIndex].label || '';
              label += Math.round(tooltipItem.yLabel * 100);
              return label;
            }
          }
        },
        scales: {
          xAxes: [{
            time: {
              unit: 'minute'
            },
            scaleLabel: {
              display: true,
              labelString: 'Travel time (minutes)'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Departure Time'
            }
          }]
        },
        legend: { display: false },
        responsive: false,
        display: true
      }
    });
  }

}
