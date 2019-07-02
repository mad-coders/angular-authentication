import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Components */
import { MadcodersAngularAuthLoginComponent } from './madcoders-angular-jwt-auth-login.component';

const routes: any[] = [
  {
    path: '',
    component: MadcodersAngularAuthLoginComponent,
  }
];

const components: any[] = [
  MadcodersAngularAuthLoginComponent,
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
export class MadcodersAngularJwtAuthLoginModule { }
