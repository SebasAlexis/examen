import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api-user/registro';

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
