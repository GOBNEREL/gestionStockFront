import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SupplierOrderListComponent } from "./supplier-order-list/supplier-order-list.component";

const routes: Routes = [
    {
      path: '',
      component: SupplierOrderListComponent
    },
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SupplierOrderRoutingModule { }