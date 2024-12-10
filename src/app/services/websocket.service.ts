import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket!: WebSocket;
  private subject!: Subject<any>;
  private configuration: any;

  constructor() {
    this.connect();
  }

  public connect() {
    this.socket = new WebSocket('ws://localhost:8080/ws/ticketing');
    this.subject = new Subject<any>();

    this.socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed', event);
      if (event.code !== 1000) {
        console.log('Reconnecting...');
        setTimeout(() => this.connect(), 1000);
      }
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.socket.onmessage = (event) => {
      console.log('Message received from server:', event.data);
      this.subject.next(event.data);
    };
  }

  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  sendMessage(message: any): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        console.log('Sending message:', message);
        this.socket.send(JSON.stringify(message));
    } else {
        console.error('WebSocket is not open. Ready state is:', this.socket.readyState);
    }
  }

  setConfiguration(config: any): void {
    this.configuration = config;
  }

  getConfiguration(): any {
    return this.configuration;
  }

  public getMessages(): Observable<any> {
    return this.subject.asObservable();
  }
}