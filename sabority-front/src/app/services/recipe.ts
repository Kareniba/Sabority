import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private url = 'http://localhost:3000/api/recetas';

  constructor(private http: HttpClient, private auth: AuthService) {}

  private headers() {
    return new HttpHeaders({ Authorization: `Bearer ${this.auth.getToken()}` });
  }

  getRecetas(): Observable<any> {
    return this.http.get(this.url);
  }

  getReceta(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  createReceta(data: any): Observable<any> {
    return this.http.post(this.url, data, { headers: this.headers() });
  }

  updateReceta(id: string, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data, { headers: this.headers() });
  }

  deleteReceta(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { headers: this.headers() });
  }
}
