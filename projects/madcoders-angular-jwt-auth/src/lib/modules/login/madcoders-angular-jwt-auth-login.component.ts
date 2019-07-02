import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CreateUserDto } from './dtos/create-user.dto';

import { AuthService } from 'src/app/core/services/auth.service';
import { LoginDto } from './dtos/login.dto';
import { MadcodersAngularJwtAuthService } from '../../madcoders-angular-jwt-auth.service';
import { MadcodersAngularJwtAuthLoginService } from './madcoders-angular-jwt-auth-login.service';

@Component({
    selector: 'madcoders-angular-jwt-auth-login',
    templateUrl: './madcoders-angular-jwt-auth-login.component.html',
    styleUrls: ['./madcoders-angular-jwt-auth-login.component.scss'],
})
export class MadcodersAngularAuthLoginComponent implements OnInit {
    public loginForm: FormGroup;
    public registerForm: FormGroup;
    public errorMessage: string;

    constructor(private formBuilder: FormBuilder,
                private madcodersAngularJwtAuthService: MadcodersAngularJwtAuthLoginService,
                private authService: MadcodersAngularJwtAuthService,
                private router: Router) {}

    async ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: [''],
            password: [''],
        });

        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            organization: ['', Validators.required],
        });
    }

    async onRegisterFormSubmit() {
        const user: CreateUserDto = this.registerForm.getRawValue();

        try {
            await this.madcodersAngularJwtAuthService.register(user).toPromise();
            this.registerForm.reset();
            this.errorMessage = '';
        } catch (err) {
            this.errorMessage = err.error.message;
        }
    }

    async onLoginFormSubmit() {
        const loginDto: LoginDto = this.loginForm.getRawValue();

        try {
            const data = await this.madcodersAngularJwtAuthService.login(loginDto).toPromise();
            this.loginForm.reset();
            this.errorMessage = '';
            this.authService.setAuthToken(data.token);
            this.router.navigate(['/test']);
        } catch (err) {
            this.errorMessage = err.error.message;
        }
    }
}
