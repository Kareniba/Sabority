import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private url = 'http://localhost:3000/api/categorias';

  constructor(private http: HttpClient, private auth: AuthService) {}

  private headers() {
    return new HttpHeaders({ Authorization: `Bearer ${this.auth.getToken()}` });
  }

  getCategorias(): Observable<any> {
    return this.http.get(this.url);
  }

  createCategoria(data: any): Observable<any> {
    return this.http.post(this.url, data, { headers: this.headers() });
  }

  updateCategoria(id: string, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data, { headers: this.headers() });
  }

  deleteCategoria(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { headers: this.headers() });
  }
}
