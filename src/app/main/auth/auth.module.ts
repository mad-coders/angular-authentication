import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

/** Routes */
const routes: any[] = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'test',
    loadChildren: './test/test.module#TestModule',
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class AuthModule { }
