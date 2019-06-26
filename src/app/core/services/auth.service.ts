import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private tokenKey = 'jwt-token';

    constructor() { }

    /**
     * Return token
     */
    public getTokenByKey(): string {
        return localStorage.getItem(this.tokenKey);
    }

    /**
     * Remove auth token
     */
    public removeToken(): void {
        return localStorage.removeItem(this.tokenKey);
    }
}
