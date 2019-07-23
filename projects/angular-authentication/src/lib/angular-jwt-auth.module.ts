import { NgModule } from '@angular/core';
import { AngularJwtAuthService } from './angular-jwt-auth.service';
import { AngularJwtAuthGuard } from './angular-jwt-auth.guard';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AngularJwtAuthService,
    AngularJwtAuthGuard,
  ],
  exports: [],
})
export class AngularJwtAuthModule { }
