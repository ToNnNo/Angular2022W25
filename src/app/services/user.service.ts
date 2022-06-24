import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static readonly API_USER_URL = `${environment.apiBaseUrl}/users`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(UserService.API_USER_URL);
  }

  public find(id: number): Observable<User> {
    return this.http.get<User>(`${UserService.API_USER_URL}/${id}`);
  }

  public create(user: User): Observable<User> {
    return this.http.post<User>(UserService.API_USER_URL, user);
  }
}
