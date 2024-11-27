import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:8080/ws/ticketing');

    // Log connection status
    this.socket$.subscribe(
      msg => console.log('Received message:', msg),
      err => console.error('WebSocket error:', err),
      () => console.log('WebSocket connection closed')
    );

    // Log when the connection is opened
    this.socket$.subscribe(
      () => console.log('WebSocket connection established'),
      err => console.error('WebSocket error:', err),
      () => console.log('WebSocket connection closed')
    );
  }

  sendMessage(msg: any) {
    this.socket$.next(msg);
  }

  getMessages(): Observable<any> {
    return this.socket$.asObservable();
  }
}