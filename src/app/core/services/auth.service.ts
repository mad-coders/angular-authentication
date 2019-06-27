import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CreateUserDto } from 'src/app/main/auth/login/dtos/create-user.dto';

import { IUser } from 'src/app/shared/interfaces/user.interface';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginDto } from 'src/app/main/auth/login/dtos/login.dto';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private tokenKey = 'jwt-token';

    constructor(private httpClient: HttpClient) { }

    /**
     * Return token
     */
    public getTokenByKey(): string {
        return localStorage.getItem(this.tokenKey);
    }

    /**
     * Set token
     */
    public setTokenByKey(token: string): void {
        return localStorage.setItem(this.tokenKey, token);
    }

    /**
     * Remove auth token
     */
    public removeToken(): void {
        return localStorage.removeItem(this.tokenKey);
    }

    /**
     * Login
     * @param loginDto
     */
    public login(loginDto: LoginDto): Observable<{ token: string; }> {
        return this.httpClient.post<{ token: string; }>(`${environment.apiUrl}/login`, loginDto);
    }

    /**
     * Get supplier products
     * @param supplierId
     */
    public register(user: CreateUserDto): Observable<IUser> {
        return this.httpClient.post<IUser>(`${environment.apiUrl}/register`, user);
    }

    /**
     * Test auth
     */
    public testAuth(): Observable<any> {
        return this.httpClient.get<any>(`${environment.apiUrl}/testAuth`);
    }
}
