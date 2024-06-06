import { Component } from '@angular/core';
import {UserService} from "../service/user.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, Validators} from "@angular/forms";
import {ToastManagerService} from "../../../../shared/service/toast-manager.service";
import {ChangePasswordBean} from "../../../../../gs-api/src/models/change-password-bean";
import {UserDto} from "../../../../../gs-api/src/models/user-dto";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  loginUser = '';
  isSaving = false;
  errorMsg: Array<String> = [];

  userDto: UserDto = {};
  formGroup = this.fb.group({
    oldPassword: ['', Validators.required],
    newPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmPassword: ['', Validators.required],
    // login: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
  });

  constructor(
    private userService: UserService,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {}

  exit(): void {
    this.activeModal.close();
  }

  changePassword(): void {
    this.isSaving = true;
    this.userService.changePassword({language: localStorage.getItem('language') ?? 'fr',
      body: this.createForm()}).subscribe({
      next: (res) => {
        this.isSaving = false;
        ToastManagerService.toastSuccess(res.message);
        this.activeModal.close('success');
      },
      error: (err) => {
        this.isSaving = false;
        ToastManagerService.toastWarning(err.error.message);
        this.errorMsg = err.error.errors;
      }
    })
  }

  createForm(): ChangePasswordBean {
    return {
      oldPassword: this.formGroup.value.oldPassword ?? '',
      newPassword: this.formGroup.value.newPassword ?? '',
      confirmPassword: this.formGroup.value.confirmPassword ?? '',
      login: this.loginUser
    }
  }

}
