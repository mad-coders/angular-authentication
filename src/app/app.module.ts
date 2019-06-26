import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Components */
import { AppComponent } from './app.component';

/** Modules */
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

const components: any[] = [
  AppComponent,
];

const modules: any[] = [
  BrowserModule,
  AppRoutingModule,
  CoreModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
