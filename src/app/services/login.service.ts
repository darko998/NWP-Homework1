import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Credentials } from '../models/credentials.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly loginUrl = "http://localhost:8080/login";

  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.get(this.loginUrl, {
      params: {
        username: credentials.username,
        password: credentials.password,
        duration: credentials.duration
      }
    }).pipe(map((response: Credentials) => {
      console.log(response);
      localStorage.setItem('JWT', response.JWT);
      localStorage.setItem('username', response.username);
    }))
  }

  ngOnDestroy(): void {
    this.logout();
  }

  logout() {
    localStorage.removeItem('JWT');
  }
}
