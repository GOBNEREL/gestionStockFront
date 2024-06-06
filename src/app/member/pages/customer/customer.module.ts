import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedMemberModule } from "../../shared-member/shared-member.module";
import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerSaveComponent } from './customer-save/customer-save.component';
import {  CustomerItemSearchComponent } from "./customer-list/customer-item-search/customer-item-search.component";
import { CustomerItemComponent } from "./customer-list/category-item/customer-item.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";

@NgModule({
    declarations: [

    
    CustomerListComponent,
           CustomerSaveComponent,
           CustomerItemSearchComponent,
           CustomerItemComponent,
           CustomerDetailsComponent,
  ],
      imports: [
          CommonModule,
          CustomerRoutingModule,
          SharedMemberModule
      ]
  })
  export class CustomerModule { }