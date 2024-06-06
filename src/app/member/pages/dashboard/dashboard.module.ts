import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardListingComponent } from './dashboard-listing/dashboard-listing.component';
import {TranslateModule} from "@ngx-translate/core";
import {NgSelectModule} from "@ng-select/ng-select";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../shared/shared.module";
import {NgApexchartsModule} from "ng-apexcharts";
import { DashboardItemComponent } from './dashboard-listing/dashboard-item/dashboard-item.component';
import { DashboardItemSearchComponent } from './dashboard-listing/dashboard-item-search/dashboard-item-search.component';
import { SharedMemberModule } from '../../shared-member/shared-member.module';


@NgModule({
  declarations: [
    DashboardListingComponent,
    DashboardItemComponent,
    DashboardItemSearchComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule,
    NgSelectModule,
    ReactiveFormsModule,
    SharedModule,
    SharedMemberModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
