import { NgModule } from '@angular/core';
import { MadcodersAngularJwtAuthService } from './madcoders-angular-jwt-auth.service';
import { MadcodersAngularJwtAuthGuard } from './madcoders-angular-jwt-auth.guard';
import { MadcodersAngularJwtAuthLoginModule } from './modules/login/madcoders-angular-jwt-auth-login.module';

@NgModule({
  declarations: [],
  imports: [
    MadcodersAngularJwtAuthLoginModule,
  ],
  providers: [
    MadcodersAngularJwtAuthService,
    MadcodersAngularJwtAuthGuard,
  ],
  exports: [
    MadcodersAngularJwtAuthLoginModule,
  ],
})
export class MadcodersAngularJwtAuthModule { }
