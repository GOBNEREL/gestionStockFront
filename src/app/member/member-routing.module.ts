import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layoutsRouters } from './layouts/layouts.route';
import { RedirectToServiceComponent } from './pages/redirect-to-service/redirect-to-service.component';


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'redirect',
    component: RedirectToServiceComponent,
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/user/user.module').then(
        (m) => m.UserModule
      ),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./pages/category/category.module').then(
        (m) => m.CategoryModule
      ),
  },
  {
    path: 'article',
    loadChildren: () =>
      import('./pages/article/article.module').then(
        (m) => m.ArticleModule
      ),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./pages/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: 'supplier',
    loadChildren: () =>
      import('./pages/supplier/supplier.module').then(
        (m) => m.SupplierModule
      ),
  },
  {
    path: 'supplierOrder',
    loadChildren: () =>
      import('./pages/supplier/supplier-order/supplier-order.module').then(
        (m) => m.SupplierOrderModule
      ),
  },
  {
    path: 'customerOrder',
    loadChildren: () =>
      import('./pages/customer/customer-order/customer-order.module').then(
        (m) => m.CustomerOrderModule
      ),
  },

  ...layoutsRouters,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRoutingModule {}
