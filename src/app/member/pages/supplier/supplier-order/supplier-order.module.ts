import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedMemberModule } from "src/app/member/shared-member/shared-member.module";
import { SupplierOrderRoutingModule } from "./supplier-order-routing.module";
import { SupplierOrderListComponent } from './supplier-order-list/supplier-order-list.component';
import { SupplierOrderSaveComponent } from './supplier-order-save/supplier-order-save.component';
import { SupplierOrderItemComponent } from './supplier-order-list/supplier-order-item/supplier-order-item.component';
import { SupplierOrderItemSearchComponent } from './supplier-order-list/supplier-order-item-search/supplier-order-item-search.component';
import { SupplierOrderDetailsComponent } from './supplier-order-details/supplier-order-details.component';

@NgModule({
    declarations: [

    
    SupplierOrderListComponent,
           SupplierOrderSaveComponent,
           SupplierOrderItemComponent,
           SupplierOrderItemSearchComponent,
           SupplierOrderDetailsComponent
  ],
      imports: [
          CommonModule,
          SupplierOrderRoutingModule,
          SharedMemberModule
      ]
  })
  export class SupplierOrderModule { }