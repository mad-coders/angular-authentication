import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

/** Components */
import { RouterModule } from '@angular/router';

const routes: any[] = [
  {
    path: '',
    component: LoginComponent,
  }
];

const components: any[] = [
  LoginComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class LoginModule { }
