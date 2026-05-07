import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:8080/api/v1/auth'; // Tu endpoint de Spring Boot

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login`, credentials).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('sisu_jwt', response.token);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('sisu_jwt');
  }

  getToken(): string | null {
    return localStorage.getItem('sisu_jwt');
  }
}