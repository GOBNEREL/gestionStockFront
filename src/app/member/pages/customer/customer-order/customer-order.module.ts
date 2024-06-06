import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedMemberModule } from "src/app/member/shared-member/shared-member.module";
import { CustomerOrderRoutingModule } from "./customer-order-routing.module";
import { CustomerOrderListComponent } from './customer-order-list/customer-order-list.component';
import { CustomerOrderSaveComponent } from './customer-order-save/customer-order-save.component';
import { CustomerOrderItemComponent } from './customer-order-list/customer-order-item/customer-order-item.component';
import { CustomerOrderItemSearchComponent } from './customer-order-list/customer-order-item-search/customer-order-item-search.component';

@NgModule({
    declarations: [
    CustomerOrderListComponent,
    CustomerOrderSaveComponent,
    CustomerOrderItemComponent,
    CustomerOrderItemSearchComponent
  ],
      imports: [
          CommonModule,
          CustomerOrderRoutingModule,
          SharedMemberModule
      ]
  })
  export class CustomerOrderModule { }