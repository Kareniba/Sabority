import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url = 'http://localhost:3000/api';
  private isBrowser: boolean;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.url}/auth/register`, data);
  }

  guardarToken(token: string, usuario: any) {
    if (this.isBrowser) {
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify(usuario));
    }
  }

  getToken(): string | null {
    if (this.isBrowser) return localStorage.getItem('token');
    return null;
  }

  getUsuario(): any {
    if (this.isBrowser) {
      const u = localStorage.getItem('usuario');
      return u ? JSON.parse(u) : null;
    }
    return null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    if (this.isBrowser) {
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
    }
  }
}
