import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedMemberModule } from "../../shared-member/shared-member.module";
import { SupplierRoutingModule } from "./supplier-routing.module";
import { SupplierListComponent } from "./supplier-list/supplier-list.component";
import { SupplierSaveComponent } from "./supplier-save/supplier-save.component";
import { SupplierItemComponent } from "./supplier-list/supplier-item/supplier-item.component";
import { SupplierItemSearchComponent } from "./supplier-list/supplier-item-search/supplier-item-search.component";
import { SupplierDetailsComponent } from "./supplier-details/supplier-details.component";

@NgModule({
    declarations: [
        SupplierListComponent,
        SupplierSaveComponent,
        SupplierItemComponent,
        SupplierItemSearchComponent,
        SupplierDetailsComponent,
    ],
      imports: [
          CommonModule,
          SupplierRoutingModule,
          SharedMemberModule
      ]
  })
  export class SupplierModule { }