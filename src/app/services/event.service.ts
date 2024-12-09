import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = 'http://localhost:8080/api/events'; 

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }
}