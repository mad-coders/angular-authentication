import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularJwtAuthGuard } from 'projects/angular-authentication/src/public-api';

/** Routes */
const routes: any[] = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'test',
    loadChildren: './test/test.module#TestModule',
    canActivate: [AngularJwtAuthGuard],
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
