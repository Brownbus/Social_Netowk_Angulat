import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string = 'http://localhost:3050/auth'
  options: any = { headers: { "content-type": "application/json" } }
  constructor(private http: HttpClient) { }
  authenticate(username, password) {
    return this.http.post(
      this.url,
      { username, password },
      this.options
    )
  }
}
