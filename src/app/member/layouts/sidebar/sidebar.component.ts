import {Component, OnInit} from '@angular/core';
import {ROUTES} from './sidebar-items';
import {AccountService} from "../../../core/auth/account.service";
import {LogoutModalComponent} from "../logout-modal/logout-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { UserDto } from 'src/gs-api/src/models';
import {ChangePasswordComponent} from "../../pages/user/change-password/change-password.component";

@Component({
  selector: 'app-sidebar', templateUrl: './sidebar.component.html', styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  title = 'sky_stagiaire_frontend';

  undraw_profile = "assets/user12345.jpg";


  userDto: UserDto | null = {};

  menus = ROUTES;

  constructor(private accountService: AccountService,
              private ngbModal: NgbModal) {
  }

  ngOnInit(): void {
    this.accountService.identity().subscribe((userDto: UserDto | null) => {
      this.userDto = userDto;
    });
  }

  changePassword(loginUser: string | null | undefined): void {
    const modalRef = this.ngbModal.open(ChangePasswordComponent, {size: 'md', backdrop: 'static'});
    modalRef.componentInstance.loginUser = loginUser;
  }

  logout(): void {
    this.ngbModal.open(LogoutModalComponent, {size: 'md', backdrop: false});
  }

  shouldActivateLink(path: string | undefined): string[] {
    return path ? [path] : [];
  }


}
