import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = [
    {
      name: 'Event 1',
      shortDescription: 'Short description of event 1',
      description: 'Detailed description of event 1',
      imageUrl: 'path/to/image1.jpg',
      price: 100,
      availableTickets: 50
    },
    {
      name: 'Event 2',
      shortDescription: 'Short description of event 2',
      description: 'Detailed description of event 2',
      imageUrl: 'path/to/image2.jpg',
      price: 150,
      availableTickets: 30
    },
    // Add more events as needed
  ];

  selectedEvent: any;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(event: any): void {
    this.selectedEvent = event;
    const modalElement = document.getElementById('eventDetailsModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    } else {
      console.error('Modal element not found');
    }
  }

  buyTickets(event: any): void {
    if (event.availableTickets > 0) {
      event.availableTickets--;
      alert(`Tickets for ${event.name} purchased successfully!`);
    }
  }
}