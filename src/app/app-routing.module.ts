import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberComponent} from "./member/member.component";
import {UserRouterAccessService} from "./core/auth/user-router-access.service";
import {PublicComponent} from "./public/public.component";

const routes: Routes = [
  {
    path:'member',
    component: MemberComponent,
    canActivate: [UserRouterAccessService],
    loadChildren: () => import('./member/member.module').then(m => m.MemberModule),
  },
  {
    path:'',
    component: PublicComponent,
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
