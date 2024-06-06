import {NgModule} from '@angular/core';
import {MemberRoutingModule} from './member-routing.module';
import {MemberComponent} from './member.component';
import {LayoutsModule} from "./layouts/layouts.module";
import {NgxPaginationModule} from "ngx-pagination";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedMemberModule} from "./shared-member/shared-member.module";
import {SharedModule} from "../shared/shared.module";
import {ConfirmationBoxComponent} from './components/confirmation-box/confirmation-box.component';

@NgModule({
  declarations: [
    MemberComponent,
    ConfirmationBoxComponent,
  ],
  imports: [
    SharedMemberModule,
    LayoutsModule,
    NgxPaginationModule,
    NgbPaginationModule,
    SharedModule,
    MemberRoutingModule,
  ]
})
export class MemberModule {
}

