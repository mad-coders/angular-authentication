import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MadcodersAngularJwtAuthService {

  private tokenKey = 'jwt-token';

  constructor(private httpClient: HttpClient) { }

  /**
   * Return token
   */
  public getAuthToken(): string {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Set token
   */
  public setAuthToken(token: string): void {
    return localStorage.setItem(this.tokenKey, token);
  }

  /**
   * Remove auth token
   */
  public removeToken(): void {
    return localStorage.removeItem(this.tokenKey);
  }
}
