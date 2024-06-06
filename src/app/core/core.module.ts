import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./interceptor/auth.interceptor";
import {AuthExpiredInterceptor} from "./interceptor/auth-expired.interceptor";
import {ErrorHandlerInterceptor} from "./interceptor/error-handler.interceptor";
import {TransferStateInterceptor} from "./interceptor/transfert-state.interceptor";
import {NgxWebstorageModule} from "ngx-webstorage";



@NgModule({
  declarations: [],
  imports: [
    NgxWebstorageModule.forRoot({ prefix: 'app', separator: '-' }),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TransferStateInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
