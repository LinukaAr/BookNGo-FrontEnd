import { Component, OnInit } from '@angular/core';
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
  searchTerm: string = '';
  selectedCategory: string = '';
  sortBy: string = 'date';
  events: Event[] = [];
  filteredEvents: Event[] = [];
  selectedEvent: Event | null = null;

  constructor(private webSocketService: WebSocketService) {
    this.events = this.getMockEvents();
    this.filteredEvents = [...this.events];
  }

  ngOnInit(): void {
    this.applyFilters();
    this.webSocketService.getMessages().subscribe(message => {
      console.log(message);
    });
  }

  private getMockEvents(): Event[] {
    return [
      // Mock events data
    ];
  }

  applyFilters(): void {
    this.filteredEvents = this.events
      .filter(event => {
        const matchesSearch = event.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                              event.description.toLowerCase().includes(this.searchTerm.toLowerCase());
        const matchesCategory = !this.selectedCategory || event.category === this.selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        switch (this.sortBy) {
          case 'price':
            return a.price - b.price;
          case 'name':
            return a.name.localeCompare(b.name);
          default:
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
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
}