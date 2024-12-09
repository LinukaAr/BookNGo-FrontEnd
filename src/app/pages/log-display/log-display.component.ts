import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-log-display',
  templateUrl: './log-display.component.html',
  styleUrls: ['./log-display.component.css']
})
export class LogDisplayComponent implements OnInit {
  ticketCount: number = 0;
  logs: string[] = [];

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.webSocketService.onMessage().subscribe((message: string) => {
      console.log('Message received in LogDisplayComponent:', message);
      try {
        const data = JSON.parse(message);
        if (data && data.ticketCount !== undefined) {
          this.ticketCount = data.ticketCount;
        }
        this.logs.push(message);
      } catch (e) {
        console.error('Error parsing message:', e);
      }
    });
  }
}