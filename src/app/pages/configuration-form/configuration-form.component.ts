import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebSocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-configuration-form',
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.css']
})
export class ConfigurationFormComponent {
  totalTickets: number = 0;
  ticketReleaseRate: number = 0;
  customerRetrievalRate: number = 0;
  maxTicketCapacity: number = 0;

  constructor(private webSocketService: WebSocketService) {}

  onSubmit(form: NgForm) {
    if (this.maxTicketCapacity <= this.totalTickets) {
      form.controls['maxTicketCapacity'].setErrors({ maxCapacity: true });
    } else {
      const config = {
        action: 'configure',
        totalTickets: this.totalTickets,
        ticketReleaseRate: this.ticketReleaseRate,
        customerRetrievalRate: this.customerRetrievalRate,
        maxTicketCapacity: this.maxTicketCapacity,
      };
      console.log('Sending configuration:', config);
      this.webSocketService.setConfiguration(config);
      this.webSocketService.sendMessage(config);
      console.log('Form submitted:', form.value);
    }
  }
}