import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

/* Services */
import { AngularJwtAuthService } from 'angular-authentication';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AngularJwtAuthService) { }

  canActivate(): boolean {
    if (!this.auth.getAuthToken() || this.auth.isTokenExpired()) {
      return false;
    }

    return true;
  }
}
