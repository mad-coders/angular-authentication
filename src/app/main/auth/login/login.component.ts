import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CreateUserDto } from './dtos/create-user.dto';

import { AuthService } from 'src/app/core/services/auth.service';
import { LoginDto } from './dtos/login.dto';
import { LoginService } from './login.service';
import { MadcodersAngularJwtAuthService } from 'projects/madcoders-angular-jwt-auth/src/public-api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public registerForm: FormGroup;
    public errorMessage: string;

    constructor(private formBuilder: FormBuilder,
                private loginService: LoginService,
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
            await this.loginService.register(user).toPromise();
            this.registerForm.reset();
            this.errorMessage = '';
        } catch (err) {
            this.errorMessage = err.error.message;
        }
    }

    async onLoginFormSubmit() {
        const loginDto: LoginDto = this.loginForm.getRawValue();

        try {
            const data = await this.loginService.login(loginDto).toPromise();
            this.loginForm.reset();
            this.errorMessage = '';
            this.authService.setAuthToken(data.token);
            this.router.navigate(['/test']);
        } catch (err) {
            this.errorMessage = err.error.message;
        }
    }
}
