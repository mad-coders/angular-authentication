import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MadcodersAngularJwtAuthGuard } from 'projects/madcoders-angular-jwt-auth/src/public-api';

/** Routes */
const routes: any[] = [
  {
    path: 'login',
    loadChildren: 'projects/madcoders-angular-jwt-auth/src/public-api#MadcodersAngularJwtAuthModule', //tslint:disable
  },
  {
    path: 'test',
    loadChildren: './test/test.module#TestModule',
    canActivate: [MadcodersAngularJwtAuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [],
})
export class AuthModule { }
