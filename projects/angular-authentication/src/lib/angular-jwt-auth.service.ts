import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularJwtAuthService {

  private tokenKey = 'jwt-token';

  constructor() { }

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

  /**
   * Check token expire
   */
  public isTokenExpired(): boolean {
    const token = this.getAuthToken();
    try {
      const jwtPayload = this.getJwtPayload(token);
      if (!jwtPayload || !jwtPayload.hasOwnProperty('exp')) {
        return null;
      }

      const expirationDate = jwtPayload.exp;
      const nowDate = Date.now() / 1000;

      return expirationDate < nowDate;
    } catch (err) {
      return true;
    }
  }

  private getJwtPayload(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
}
