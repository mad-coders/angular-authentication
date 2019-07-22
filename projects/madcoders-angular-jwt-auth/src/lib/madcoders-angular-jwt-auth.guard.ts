import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

/* Services */
import { MadcodersAngularJwtAuthService } from './madcoders-angular-jwt-auth.service';

@Injectable({
  providedIn: 'root',
})
export class MadcodersAngularJwtAuthGuard implements CanActivate {
  constructor(private auth: MadcodersAngularJwtAuthService,
              private router: Router) { }

  canActivate(): boolean {
    if (!this.auth.getAuthToken() || this.auth.isTokenExpired()) {
      this.router.navigate(['login']);

      return false;
    }

    return true;
  }
}
