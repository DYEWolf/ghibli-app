import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl = 'https://ghibliapi.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getAllFilms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}films`);
  }
}
