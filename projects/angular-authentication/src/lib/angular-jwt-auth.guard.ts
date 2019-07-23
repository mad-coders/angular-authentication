import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

/* Services */
import { AngularJwtAuthService } from './angular-jwt-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AngularJwtAuthGuard implements CanActivate {
  constructor(private auth: AngularJwtAuthService,
              private router: Router) { }

  canActivate(): boolean {
    if (!this.auth.getAuthToken() || this.auth.isTokenExpired()) {
      this.router.navigate(['login']);

      return false;
    }

    return true;
  }
}
