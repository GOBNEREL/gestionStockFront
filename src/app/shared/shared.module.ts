import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MyDatePipe} from "./pipe/myDatePipe.pipe";
import {NgSelectModule} from "@ng-select/ng-select";
import {TranslateModule} from "@ngx-translate/core";
import {DateFormatPipe} from "./pipe/DateFormatPipe";
import {DateFormatUpdatePipe} from "./pipe/DateFormatUpdatePipe";
import {DateHourFormatPipe} from "./pipe/DateHourFormatPipe";
import {AbsoluteValuePipe} from "./pipe/absolute-value.pipe";
import { TimeFormatPipe } from './pipe/time-format.pipe';
import { FormValidationComponent } from '../component-global/form-validation/form-validation.component';

@NgModule({
  declarations: [
    MyDatePipe,
    DateFormatPipe,
    DateFormatUpdatePipe,
    AbsoluteValuePipe,
    DateHourFormatPipe,
    FormValidationComponent,
    TimeFormatPipe
  ],
  imports: [
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    TranslateModule,
    CommonModule
  ],
  exports: [
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    TranslateModule,
    CommonModule,
    MyDatePipe,
    DateFormatPipe,
    DateFormatUpdatePipe,
    DateHourFormatPipe,
    FormValidationComponent,
    AbsoluteValuePipe,
    TimeFormatPipe
  ]
})
export class SharedModule { }
