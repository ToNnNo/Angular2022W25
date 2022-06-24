import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../interfaces/film.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private static readonly API_FILM_URL = `${environment.localApiBaseUrl}/films`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Film[]> {
    return this.http.get<Film[]>(FilmService.API_FILM_URL);
  }

  public find(id: number): Observable<Film> {
    return this.http.get<Film>(`${FilmService.API_FILM_URL}/${id}`);
  }

  public save(data: Film): Observable<Film> {
    return this.http.post<Film>(FilmService.API_FILM_URL, data);
  }

  public edit(id: number, data: Film): Observable<Film> {
    return this.http.patch<Film>(`${FilmService.API_FILM_URL}/${id}`, data);
  }

  public delete(id: number): Observable<Film> {
    return this.http.delete<Film>(`${FilmService.API_FILM_URL}/${id}`);
  }
}
