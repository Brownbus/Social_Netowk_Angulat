import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string = 'http://localhost:3050/auth'
  constructor(private http: HttpClient) { }
  authenticate(username, password){
    return this.http.get(this.url, {
        headers: {"content-type" : "application/json"},
        observe: "body",
        params: {username, password}
      }
    )
  }
}
