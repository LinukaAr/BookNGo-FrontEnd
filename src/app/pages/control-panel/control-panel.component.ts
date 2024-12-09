import { Component } from '@angular/core';
import { WebSocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  errorMessage: string | null = null;
  statusMessage: string | null = null;

  constructor(private webSocketService: WebSocketService) {}

  start() {
    console.log('Attempting to send start message');
    const config = this.webSocketService.getConfiguration(); // Ensure the service is returning the correct config
    if (config && config.action === 'configure') {
      this.errorMessage = null;
      this.statusMessage = 'Start message sent.';
      this.webSocketService.sendMessage({ action: 'start' });
      console.log('Start button clicked with configuration:', config);
    } else {
      this.errorMessage = 'No valid configuration found. Please submit the configuration form first.';
      this.statusMessage = null;
      console.error(this.errorMessage);
    }
  }

  stop() {
    console.log('Attempting to send stop message');
    this.errorMessage = null;
    this.statusMessage = 'Stop message sent.';
    this.webSocketService.sendMessage({ action: 'stop' });
    console.log('Stop button clicked');
  }
}
