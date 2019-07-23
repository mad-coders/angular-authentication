import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Components */
import { LoginComponent } from './login.component';

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
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  exports: [
    ...components,
  ],
})
export class LoginModule { }
