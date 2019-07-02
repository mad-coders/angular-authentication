import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MadcodersAngularJwtAuthService } from 'projects/madcoders-angular-jwt-auth/src/public-api';

// import { CreateUserDto } from 'src/app/main/auth/login/dtos/create-user.dto';

import { IUser } from 'src/app/shared/interfaces/user.interface';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
// import { LoginDto } from 'src/app/main/auth/login/dtos/login.dto';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private httpClient: HttpClient,
                private madcodersAngularJwtAuthService: MadcodersAngularJwtAuthService) { }

    /**
     * Return token
     */
    public getAuthToken(): string {
        return this.madcodersAngularJwtAuthService.getAuthToken();
    }

    /**
     * Remove auth token
     */
    public removeToken(): void {
        return this.madcodersAngularJwtAuthService.removeToken();
    }

    /**
     * Set token
     */
    public setAuthToken(token: string): void {
        return this.madcodersAngularJwtAuthService.setAuthToken(token);
    }

    /**
     * Test auth
     */
    public testAuth(): Observable<any> {
        return this.httpClient.get<any>(`${environment.apiUrl}/testAuth`);
    }
}
