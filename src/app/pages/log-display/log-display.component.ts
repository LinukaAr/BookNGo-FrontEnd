import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-display',
  templateUrl: './log-display.component.html',
  styleUrls: ['./log-display.component.css']
})
export class LogDisplayComponent implements OnInit {
  logs: string[] = [];

  ngOnInit(): void {
    // Fetch logs
    this.logs = ['Log 1', 'Log 2', 'Log 3']; // Example data
  }
}