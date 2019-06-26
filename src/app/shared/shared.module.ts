import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components: any[] = [
];

const modules: any[] = [
  CommonModule,
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
  ],
  providers: [
    ...services,
  ],
})
export class SharedModule { }
