import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

/** Components */
import { RouterModule } from '@angular/router';

/** Modules */
import { SharedModule } from 'src/app/shared/shared.module';

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
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class LoginModule { }
