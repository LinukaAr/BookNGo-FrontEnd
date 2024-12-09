import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { WebSocketService } from '../../services/websocket.service';
import { Modal } from 'bootstrap';

interface Event {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  date: Date;
  location: string;
  price: number;
  category: string;
  availableTickets: number;
  duration: string;
  capacity: number;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  selectedEvent: Event | null = null;
  searchTerm: string = '';
  selectedCategory: string = '';
  sortBy: string = '';
  categories: string[] = [];

  constructor(private eventService: EventService, private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.loadEvents();
    this.webSocketService.connect();
    this.webSocketService.onMessage().subscribe((message: any) => {
      if (message.startsWith('Ticket count updated: ')) {
        const newCount = parseInt(message.split(': ')[1], 10);
        if (this.selectedEvent) {
          this.selectedEvent.availableTickets = newCount;
        }
      }
    });
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe((events: Event[]) => {
      this.events = events;
      this.applyFilters();
    });
  }

  showDetails(event: Event): void {
    this.selectedEvent = event;
    const modalElement = document.getElementById('eventDetailsModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    } else {
      console.error('Modal element not found');
    }
  }

  buyTickets(event: Event): void {
    if (event.availableTickets > 0) {
      event.availableTickets--;
      this.webSocketService.sendMessage({ action: 'purchase', tickets: 1 });
      alert(`Tickets for ${event.name} purchased successfully!`);
      this.applyFilters();
    }
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onCategoryChange(): void {
    this.applyFilters();
  }

  onSortChange(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    // Implement filtering logic here
    this.filteredEvents = this.events; // Placeholder for actual filtering logic
  }
}