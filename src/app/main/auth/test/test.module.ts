import { NgModule } from '@angular/core';

/** Components */
import { RouterModule } from '@angular/router';
import { TestComponent } from './test.component';

const routes: any[] = [
  {
    path: '',
    component: TestComponent,
  }
];

const components: any[] = [
  TestComponent,
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
export class TestModule { }
