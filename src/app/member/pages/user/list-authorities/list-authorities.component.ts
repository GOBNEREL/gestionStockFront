import {Component, OnInit} from '@angular/core';
import {UserDto} from "../../../../../gs-api/src/models/user-dto";
import {UserService} from "../service/user.service";
import {WebStorageService} from "../../../../core/auth/web-storage.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastManagerService} from "../../../../shared/service/toast-manager.service";
import {AuthoritiesOfUserBean} from "../../../../../gs-api/src/models/authorities-of-user-bean";

@Component({
  selector: 'app-list-authorities',
  templateUrl: './list-authorities.component.html',
  styleUrls: ['./list-authorities.component.scss']
})
export class ListAuthoritiesComponent implements OnInit{

  userDto: UserDto = {};

  authorityOfUser: Array<String> = [];

  constructor(
    private userService: UserService,
    private webStorageService: WebStorageService,
    private activeModal: NgbActiveModal
  ) {}

  exit(): void {
    this.activeModal.close();
  }

  ngOnInit(): void {
    this.listAuthorities();
  }

  trackBy(index: number, item: any): number {
    return item.id!;
  }

  deleteRoleUser(roles: any): void {
    this.userService.deleteAuthorities({
      language: this.webStorageService.getLanguage(),
      body: {
        login: this.userDto.login,
        roles: [roles]
      }
    }).subscribe({
      next: (res) => {
        this.activeModal.close('success');
        ToastManagerService.toastSuccess(res.message);
      }
    });
  }

  listAuthorities(): void {
    this.userService.listAuthoritiesOfUser({
      body: this.setListBean(),
      language: localStorage.getItem('lang') ?? 'fr'
    }).subscribe({
      next: (res) => {
        let index = res.authorityOfUser?.indexOf("ROLE_ADMIN") ?? 0;
        if(index !== -1) {
          res.authorityOfUser?.splice(index, 1);
          this.authorityOfUser = res.authorityOfUser ?? [];
        }else {
          this.authorityOfUser = res.authorityOfUser;
        }
      }
    });
  }

  setListBean(): AuthoritiesOfUserBean {
    return {
      login: this.userDto.login ?? undefined
    };
  }

}
