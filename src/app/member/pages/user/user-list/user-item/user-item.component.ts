import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserDto} from "../../../../../../gs-api/src/models/user-dto";
import {AddAuthoritiesComponent} from "../../add-authorities/add-authorities.component";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ToastManagerService} from "../../../../../shared/service/toast-manager.service";
import {UserUpdateComponent} from "../../user-update/user-update.component";
import {ChangePasswordComponent} from "../../change-password/change-password.component";
import {UserDetailsComponent} from "../../user-details/user-details.component";
import {ListAuthoritiesComponent} from "../../list-authorities/list-authorities.component";
import {ResetPasswordConfirmationsComponent} from "../../reset-password-confirmations/reset-password-confirmations.component";


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {

  @Input()
  userDtos: UserDto[] = [];
  gridListings = 1;

  @Output()
  updateResult = new EventEmitter();

  constructor(
    private ngbModal: NgbModal,
    private router: Router,
    private userService: UserService
  ) {}

  updateUserModal(userDto: UserDto): void {
    const modalRef = this.ngbModal.open(UserUpdateComponent, {size: 'lg', backdrop: 'static'});
    this.closeModal(modalRef, userDto);
  }

  closeModal(modalRef: NgbModalRef, userDto: UserDto): void {
    modalRef.componentInstance.userDto = userDto;
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.updateResult.emit('success');
      }
    });
  }
  changePasswordModal(userDto: UserDto): void {
    const modalRef = this.ngbModal.open(ChangePasswordComponent, {size: 'lg', backdrop: 'static'});
    this.closeModal(modalRef, userDto);
  }
  addRole(userDto: UserDto): void {
    const modalRef = this.ngbModal.open(AddAuthoritiesComponent, {size: 'lg', backdrop: 'static'});
    this.closeModal(modalRef, userDto);
  }

  detailModal(userDto: UserDto): void {
    const modalRef = this.ngbModal.open(UserDetailsComponent, {size: 'md', backdrop: 'static'});
    modalRef.componentInstance.userDto = userDto;
  }

  listRole(userDto: UserDto): void {
    const modalRef = this.ngbModal.open(ListAuthoritiesComponent, {size: 'lg', backdrop: 'static'});
    this.closeModal(modalRef, userDto);
  }
  resetPasswordModal(userDto: UserDto): void {
    const modalRef = this.ngbModal.open(ResetPasswordConfirmationsComponent, {size: 'lg', backdrop: 'static'});
    this.closeModal(modalRef, userDto);
  }

  confirmStatus(id: number) {
    this.userService.changeStatusOfUser({
      language: "fr",
      idUser: id
    }).subscribe({
      next: (res) => {
        ToastManagerService.toastSuccess(res.message);
        this.updateResult.emit('success');
      },
      error: (err) => {
        ToastManagerService.toastError(err);
      }
    });
  }


  trackBy(index: number , item: UserDto): number {
    return item.id ?? 0;
  }

}
