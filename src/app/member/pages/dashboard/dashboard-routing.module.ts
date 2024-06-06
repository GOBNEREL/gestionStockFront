import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardListingComponent } from './dashboard-listing/dashboard-listing.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
