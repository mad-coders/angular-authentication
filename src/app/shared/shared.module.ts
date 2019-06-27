import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const components: any[] = [
];

const modules: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const services: any[] = [
];

const pipes: any[] = [
];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [
    ...components,
    ...pipes,
  ],
  exports: [
    ...components,
    ...pipes,
    ...modules,
  ],
  providers: [
    ...services,
  ],
})
export class SharedModule { }
