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
          // Opcional: Si tu backend ya envía el rol junto al token (ej. response.rol),
          // podrías guardarlo directamente con: localStorage.setItem('sisu_rol', response.rol);
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

  // --- NUEVO MÉTODO AÑADIDO ---
  getUserRole(): string {
    const token = this.getToken();
    
    if (token) {
      try {
        // Un JWT tiene 3 partes separadas por puntos (header.payload.signature)
        // Obtenemos la segunda parte (payload) que contiene los datos del usuario
        const payloadBase64 = token.split('.')[1];
        
        // Decodificamos la cadena de Base64 a texto normal
        const payloadDecoded = atob(payloadBase64);
        
        // Parseamos el texto a un objeto JSON
        const payloadJson = JSON.parse(payloadDecoded);
        
        // Retornamos el rol. 
        // IMPORTANTE: Cambia 'rol' por el nombre exacto que tenga tu variable 
        // de rol en el payload generado por tu JwtUtil.java en Spring Boot
        // (Puede ser 'role', 'roles', 'authorities', 'rol', etc.)
        return payloadJson.rol || payloadJson.role || 'UNKNOWN'; 
        
      } catch (error) {
        console.error('Error al decodificar el token JWT', error);
        return 'UNKNOWN';
      }
    }
    
    return 'UNKNOWN'; // Si no hay token, no hay rol
  }
}