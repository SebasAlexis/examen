import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informacion } from '../models/Informacion';

@Injectable({
  providedIn: 'root'
})

export class InformacionService {
  private URL_API = 'http://localhost:3000/api-user';

  constructor(private http: HttpClient) {}

  getInfo(): Observable<Informacion[]> {
    return this.http.get<Informacion[]>(this.URL_API);
  }
}
