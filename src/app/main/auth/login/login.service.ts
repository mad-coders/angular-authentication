import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { LoginDto } from './dtos/login.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}
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
}
