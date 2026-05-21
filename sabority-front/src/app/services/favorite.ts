import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private url = 'http://localhost:3000/api/favoritos';

  constructor(private http: HttpClient, private auth: AuthService) {}

  private headers() {
    return new HttpHeaders({ Authorization: `Bearer ${this.auth.getToken()}` });
  }

  getFavoritos(): Observable<any> {
    return this.http.get(this.url, { headers: this.headers() });
  }

  addFavorito(recetaId: string): Observable<any> {
    return this.http.post(this.url, { recetaId }, { headers: this.headers() });
  }

  deleteFavorito(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { headers: this.headers() });
  }
}
