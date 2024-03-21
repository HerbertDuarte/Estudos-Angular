import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FecthDataService {
  constructor(private http: HttpClient) {}
  handle(factor: string): Observable<any> {
    const mid = Math.floor(factor.length / 2);
    const key = factor.substring(0, mid) + '-' + factor.substring(mid);
    return this.http.get('https://economia.awesomeapi.com.br/last/' + key);
  }
}
