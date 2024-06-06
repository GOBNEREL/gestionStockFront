import {Component, OnInit} from '@angular/core';
import {UserDto} from "../../../../../gs-api/src/models/user-dto";
import {FormBuilder, Validators} from "@angular/forms";
import {WebStorageService} from "../../../../core/auth/web-storage.service";
import {UserSaveBean} from "../../../../../gs-api/src/models/user-save-bean";
import {AccountService} from "../../../../core/auth/account.service";
import {Observable, Subscription} from "rxjs";
import {ToastManagerService} from "../../../../shared/service/toast-manager.service";
import {UserService} from "../service/user.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements  OnInit{


  account:UserDto| null ={}
  authSubscription: Subscription = new Subscription();
  type = '';
  isSaving = false;
  errorMsg: Array<string> = [];
  language = this.webStorageService.getLanguage();

  userDto: UserDto = {};

  userForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    login: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    email: [''],
    departement: [null],
    address: ['']

  });
  constructor(
    private userService: UserService,
    private webStorageService: WebStorageService,
    private accountService: AccountService,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {

  }
  ngOnInit() {
    this.authSubscription.add(this.accountService.getAuthenticationState().subscribe(account => {
      this.account = account;
    }));
  }

  createItem(userBean: UserSaveBean): void {
    this.userService.saveUser({language: this.language, body: userBean}).subscribe({
      next: (res) => {
        this.activeModal.close('success-user');
        ToastManagerService.toastSuccess(res.message);
        this.isSaving = false;
        // history.back();
      },
      error: (err) => {
        this.isSaving = false;
        this.errorMsg = err.error.errors;
        ToastManagerService.toastWarning(err.error.message);
      }
    })
  }
  saveUser(): void {
    console.log(this.createForm())
    this.isSaving = true;
    let userDto = this.createForm();
    this.createItem(userDto);
  }

  createForm(): UserSaveBean {
    // @ts-ignore
    return {
      ...this.userDto,
      name: this.userForm.value.name ?? '',
      email: this.userForm.value.email ?? '',
      phone: this.userForm.value.phone ?? '',
      login: this.userForm.value.login ?? '',
      address: this.userForm.value.address ?? '',
      activated: true,
    }
  }

  exit() {
    history.back();
  }
  cancle(): void {
    this.activeModal.dismiss('cancel');
  }
}
