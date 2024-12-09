import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private logUrl = 'http://localhost:8080/api/logs'; // URL to fetch logs from the backend

  constructor(private http: HttpClient) {}

  getLogs(): Observable<string[]> {
    return this.http.get<string[]>(this.logUrl);
  }
}