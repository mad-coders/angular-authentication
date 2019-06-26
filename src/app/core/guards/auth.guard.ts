import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

/* Services */
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router) { }

  canActivate(): boolean {
    if (!this.auth.getTokenByKey()) {
      this.router.navigate(['login']);

      return false;
    }

    return true;
  }
}
