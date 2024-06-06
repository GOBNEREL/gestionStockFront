import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddAuthoritiesComponent } from './add-authorities/add-authorities.component';
import {SharedMemberModule} from "../../shared-member/shared-member.module";
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { UserItemSearchComponent } from './user-list/user-item-search/user-item-search.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {ListAuthoritiesComponent} from "./list-authorities/list-authorities.component";
import { ResetPasswordConfirmationsComponent } from './reset-password-confirmations/reset-password-confirmations.component';


@NgModule({
  declarations: [
    UserCreateComponent,
    UserListComponent,
    UserUpdateComponent,
    UserDetailsComponent,
    AddAuthoritiesComponent,
    UserItemComponent,
    UserItemSearchComponent,
    ChangePasswordComponent,
    ListAuthoritiesComponent,
    ResetPasswordConfirmationsComponent

  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedMemberModule
    ]
})
export class UserModule { }
