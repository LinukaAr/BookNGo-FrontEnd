import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WebSocketService } from '../../services/websocket.service';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

@Component({
  selector: 'app-real-time-chart',
  templateUrl: './real-time-chart.component.html',
  styleUrls: ['./real-time-chart.component.css']
})
export class RealTimeChartComponent implements OnInit, AfterViewInit {
  chart: any;
  ticketCounts: number[] = [];
  timestamps: string[] = [];

  constructor(private webSocketService: WebSocketService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.webSocketService.getMessages().subscribe((message: any) => {
      this.updateChart(message);
    });
  }

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    this.chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: this.timestamps,
        datasets: [
          {
            label: 'Tickets',
            data: this.ticketCounts,
            borderColor: '#3cba9f',
            backgroundColor: 'rgba(60,186,159,0.2)',
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'minute',
              tooltipFormat: 'yyyy-MM-dd HH:mm:ss'
            },
            title: {
              display: true,
              text: 'Time'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Ticket Count'
            }
          }
        }
      }
    });
  }

  updateChart(message: any): void {
    try {
      const data = JSON.parse(message);
      console.log('Received data:', data); // Debugging log

      // Generate a timestamp if one is not included
      const timestamp = data.timestamp || new Date().toISOString();

      // Add new data to the arrays
      this.ticketCounts.push(data.ticketCount);
      this.timestamps.push(timestamp);

      // Update the chart
      this.chart.data.labels = this.timestamps;
      this.chart.data.datasets[0].data = this.ticketCounts;
      this.chart.update();
    } catch (error) {
      console.error('Error parsing JSON or updating chart:', error);
    }
  }
}
