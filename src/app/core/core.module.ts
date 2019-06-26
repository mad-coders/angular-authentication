import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

/** Modules */
import { SharedModule } from '../shared/shared.module';

/* Interceptors */
import { HttpInterceptor } from './interceptors/http.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';

const modules: any = [
  CommonModule,
  SharedModule,
  HttpClientModule,
  BrowserAnimationsModule,
];

const services: any = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerInterceptor,
    multi: true,
  },
];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [],
  providers: [
    ...services,
  ],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
