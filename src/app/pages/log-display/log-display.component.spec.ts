import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebSocketService } from '../../services/websocket.service'; // Correct path

@Component({
  selector: 'app-log-display',  // Correct selector
  template: `
    <div *ngFor="let log of logs">{{ log }}</div>
  `,
})
export class LogDisplayComponent implements OnInit, OnDestroy {
  logs: string[] = [];
  private logSubscription!: Subscription; // Ensure correct initialization


  constructor(private webSocketService: WebSocketService) { }

    ngOnInit(): void {
        this.logSubscription = this.webSocketService.onLogMessage().subscribe((message) => {
            this.logs.push(message);
        });
    }


    ngOnDestroy(): void {
        if (this.logSubscription){
            this.logSubscription.unsubscribe();
        }
  }
}

