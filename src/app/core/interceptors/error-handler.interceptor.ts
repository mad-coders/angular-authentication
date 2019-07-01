import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/* Services */
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return next
      .handle(req)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          /**
           * Handle unauthorized error
           */
          if (err.status === 401) {
            this.authService.removeToken();
            this.router.navigate(['/login']);
          }

          return throwError(err);
        })
      );
  }
}

