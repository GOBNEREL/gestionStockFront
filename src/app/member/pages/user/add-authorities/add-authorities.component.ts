import {Component, OnInit} from '@angular/core';
import {ToastManagerService} from "../../../../shared/service/toast-manager.service";
import {AuthoritiesBean} from "../../../../../gs-api/src/models/authorities-bean";
import {UserService} from "../service/user.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, Validators} from "@angular/forms";
import {WebStorageService} from "../../../../core/auth/web-storage.service";
import {UserDto} from "../../../../../gs-api/src/models/user-dto";
import { AuthoritiesOfUserBean } from 'src/gs-api/src/models';

@Component({
  selector: 'app-add-authorities',
  templateUrl: './add-authorities.component.html',
  styleUrls: ['./add-authorities.component.scss']
})
export class AddAuthoritiesComponent implements OnInit{
  userDto: UserDto = {};
  authoritiesBean: AuthoritiesOfUserBean = {};
  authoritiesBeans: AuthoritiesBean ={};
  language = this.webStorageService.getLanguage();
  isSaving = false;
  errorsMsg: Array<string> = [];

  authorityOfUser: Array<String> = [];
  authorityToAdd: Array<String> = [];
  check: Array<String> = [];

  constructor(
    private userService: UserService,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private webStorageService: WebStorageService
  ) {}

  userRoleAddForm = this.fb.group({
    listRoles: [null, [Validators.required]],
    roleUser: [null]
  });

  ngOnInit(): void {
    this.listAuthorities();
    this.listOfAuthoritiesToAdd();
  }
  

  listAuthorities(): void {
    this.userService.listAuthoritiesOfUser({body: this.setListBean(),
      language: this.language}).subscribe({
      next: (res) => {
        this.authoritiesBean = res;
        let index = res.authorityOfUser?.indexOf("ROLE_ADMIN") ?? 0;
        if(index !== -1) {
          res.authorityOfUser?.splice(index, 1);
          this.authorityOfUser = res.authorityDoNotOfUser ?? [];
        }else {
          this.authorityOfUser = res.authorityDoNotOfUser;
        }
      },
      error: (err) => {
        ToastManagerService.toastInfo(err.error.message);
      }
    })
  }
  
  listOfAuthoritiesToAdd(): void {
    this.userService.listAuthoritiesOfUser({body: this.setListBean(),
      language: this.language}).subscribe({
      next: (res) => {
        this.authoritiesBean = res;
        this.authorityToAdd = res.authorityDoNotOfUser ?? null;
        if (this.authorityToAdd.length == 0) {
          this.authorityToAdd.push('Aucun role a ajouter');
        }
      },
      error: (err) => {
        ToastManagerService.toastInfo(err.error.message);
      }
    })
  }

  exit(): void {
    this.activeModal.close();
  }

  setListBean(): AuthoritiesOfUserBean {
    return {
      login: this.userDto.login ?? undefined
    };
  }

  setAuthoritiesBean(): AuthoritiesBean {
    return {
      login: this.userDto.login ?? undefined,
      roles: this.userRoleAddForm.value.listRoles ?? ['']
    }
  }

  addAuthorities(): void {
    this.isSaving = true;
    this.userService.addAuthoritiesOfUser({ body: this.setAuthoritiesBean()
      , language: this.language}).subscribe({
      next:  (res) => {
        this.activeModal.close('success');
        ToastManagerService.toastSuccess(res.message);
        this.isSaving = false;
      },
      error: (err) => {
        ToastManagerService.toastWarning(err.error.message);
        this.isSaving = false;
      }
    })
  }


}
