import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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
    return this.http.post<ApiResponse>(`${environment.apiUrl}/contact`, data);
  }
}
