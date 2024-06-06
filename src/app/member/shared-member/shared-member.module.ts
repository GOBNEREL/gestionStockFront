import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import { HasAnyAuthorityDirective } from './directive/has-any-authority.directive';
import {RouterModule} from "@angular/router";
import {ButtonActionsComponent} from "../components/button-actions/button-actions.component";
import {ConfirmActionsComponent} from "../components/confirm-actions/confirm-actions.component";
import {ActifActionsComponent} from "../components/actif-actions/actif-actions.component";
import {PagetitleComponent} from "../components/pagetitle/pagetitle.component";
import { NgxPaginationModule } from 'ngx-pagination';
import {PaginationComponent} from "../components/pagination/pagination.component";
import { HasAnyServiceDirective } from './directive/has-any-service.directive';

@NgModule({
  declarations: [
    ButtonActionsComponent,
    ConfirmActionsComponent,
    ActifActionsComponent,
    PagetitleComponent,
    HasAnyAuthorityDirective,
    PaginationComponent,
    HasAnyServiceDirective
  ],
  imports: [
    SharedModule,
    RouterModule,
    NgxPaginationModule,
  ],
  exports: [
    SharedModule,
    HasAnyAuthorityDirective,
    ButtonActionsComponent,
    ActifActionsComponent,
    PagetitleComponent,
    ConfirmActionsComponent,
    RouterModule,
    NgxPaginationModule,
    PaginationComponent,
    HasAnyServiceDirective,
  ]
})
export class SharedMemberModule { }
