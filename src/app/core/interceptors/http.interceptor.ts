import {
    HttpEvent,
    HttpInterceptor as AngularHttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

/* Services */
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpInterceptor implements AngularHttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getTokenByKey()}`
            }
        });

        return next.handle(request)
            .pipe(
                map((res) => res),
                finalize(() => {}),
            );
    }
}
