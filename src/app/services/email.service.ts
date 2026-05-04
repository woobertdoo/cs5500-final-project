import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactRequest {
  name: string;
  email: string;
}

export interface ApiResponse {
  success: boolean;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private http = inject(HttpClient);

  sendContactEmail(data: ContactRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>("http://localhost:3000/api/contact", data);
  }
}
