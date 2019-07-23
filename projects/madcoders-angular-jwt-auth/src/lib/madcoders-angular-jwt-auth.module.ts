import { NgModule } from '@angular/core';
import { MadcodersAngularJwtAuthService } from './madcoders-angular-jwt-auth.service';
import { MadcodersAngularJwtAuthGuard } from './madcoders-angular-jwt-auth.guard';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    MadcodersAngularJwtAuthService,
    MadcodersAngularJwtAuthGuard,
  ],
  exports: [],
})
export class MadcodersAngularJwtAuthModule { }
