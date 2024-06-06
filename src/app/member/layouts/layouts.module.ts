import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SharedMemberModule} from "../shared-member/shared-member.module";
import { TopbarComponent } from './topbar/topbar.component';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import {TranslateModule} from "@ngx-translate/core";
import {ScrollToTopRoundedComponent} from "./scroll-to-top-rounded/scroll-to-top-rounded.component";
import {NgbDropdown} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
    ScrollToTopRoundedComponent,
    LogoutModalComponent
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
    ScrollToTopRoundedComponent,
    LogoutModalComponent,
  ],
    imports: [
        SharedMemberModule,
        TranslateModule,
        NgbDropdown
    ]
})
export class LayoutsModule { }
