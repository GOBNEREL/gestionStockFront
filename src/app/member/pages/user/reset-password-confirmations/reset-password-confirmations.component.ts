import { Component } from '@angular/core';
import {UserDto} from "../../../../../gs-api/src/models/user-dto";
import {UserService} from "../service/user.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastManagerService} from "../../../../shared/service/toast-manager.service";

@Component({
  selector: 'app-reset-password-confirmations',
  templateUrl: './reset-password-confirmations.component.html',
  styleUrls: ['./reset-password-confirmations.component.scss']
})
export class ResetPasswordConfirmationsComponent {
  userDto: UserDto = {};
  isConfirm = false;
  errorMessage = '';

  constructor(
    private userService: UserService,
    private activeModal: NgbActiveModal
  ) {}

  exit(): void {
    this.activeModal.close();
  }

  confirmResetPassword(): void {
    this.isConfirm = true;
    this.userService.resetPassword({language: localStorage.getItem('language') ?? 'fr',
      login: this.userDto.login ?? ''}).subscribe({
      next: (res) => {
        ToastManagerService.toastSuccess(res.message);
        this.activeModal.close('success');
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    })
  }
}
