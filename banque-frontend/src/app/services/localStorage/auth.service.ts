import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'access_token';

  constructor() { }

 
  setAccessToken(token: any): void {
    localStorage.setItem(this.accessTokenKey, token);
  }

  
  getAccessToken() {
    return localStorage.getItem(this.accessTokenKey);
  }

  
  isLoggedIn(): boolean {
    const token = this.getAccessToken();
    return !!token;
  }

  
  logout(): void {
    localStorage.removeItem(this.accessTokenKey);
  }
}
