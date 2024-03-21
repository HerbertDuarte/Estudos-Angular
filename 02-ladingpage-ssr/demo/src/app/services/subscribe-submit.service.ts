import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscribeSubmitResponse } from '../interfaces/subscribe.submit.interface';

@Injectable({
  providedIn: 'root'
})
export class SubscribeSubmitService {
  private endpointUrl = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http : HttpClient) { }

  handle(name: string, email: string) : Observable<SubscribeSubmitResponse>{
    const data = {name,email}
    return this.http.post<SubscribeSubmitResponse>(this.endpointUrl, data);
  }
}
