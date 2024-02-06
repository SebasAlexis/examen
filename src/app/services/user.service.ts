import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api-user';

  constructor(private http: HttpClient) { }

  addUser(userData: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, userData);
  }
}
