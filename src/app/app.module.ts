import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";
import {DateFormatPipe} from "./shared/pipe/DateFormatPipe";
import {DateFormatUpdatePipe} from "./shared/pipe/DateFormatUpdatePipe";
import {DateHourFormatPipe} from "./shared/pipe/DateHourFormatPipe";
import {AbsoluteValuePipe} from "./shared/pipe/absolute-value.pipe";
import {TimeFormatPipe} from "./shared/pipe/time-format.pipe";
import {NgApexchartsModule} from "ng-apexcharts";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    LoadingBarHttpClientModule,
    NgApexchartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SweetAlert2Module.forChild({ /* options */ }),
    AppRoutingModule
  ],
  providers: [
    DateFormatPipe,
    DateFormatUpdatePipe,
    AbsoluteValuePipe,
    DateHourFormatPipe,
    TimeFormatPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
