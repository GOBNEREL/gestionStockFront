import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AccountService} from "../../../../core/auth/account.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {UserSaveBean} from "../../../../../gs-api/src/models/user-save-bean";
import {ToastManagerService} from "../../../../shared/service/toast-manager.service";
import {UserDto} from "../../../../../gs-api/src/models/user-dto";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit{

  type = '';
  isSaving = false;
  errorMsg: Array<string> = [];
  language = localStorage.getItem('language') ?? 'fr';
  userDto: UserDto = {};
  userForm = this.fb.group({
    name: [''],
    email: ['', Validators.required],
    login: ['', Validators.required],
    phone: ['', Validators.required],
    address: [''],
    activated: [true]
  });

  constructor(
    private userService: UserService,
    private activeModal: NgbActiveModal,
    private accountService: AccountService,
    private fb: FormBuilder
  ) {
  }
  account: UserDto | null = {};
  authSubscription: Subscription = new Subscription();
  ngOnInit(): void {
    this.authSubscription.add(this.accountService.getAuthenticationState().subscribe(account => {
      this.account = account;
    }));
    this.updateForm(this.userDto);
  }

  exit() {
    this.activeModal.dismiss('cancel');
  }

  createForm(): UserSaveBean {

    return {
      ...this.userDto,
      name: this.userForm.value.name ?? '',
      email: this.userForm.value.email ?? '',
      phone: this.userForm.value.phone ?? '',
      login: this.userDto.login,
      address: this.userForm.value.address ?? '',
      activated: this.userForm.value.activated ?? true,
    }
  }

  save(): void {
    const user = this.createForm();
    // @ts-ignore
    // user.typeServiceUtilisateur = this.userForm.value.typeService;
    this.userService.update({language: this.language, body: user}).subscribe({
      next: (res) => {
        this.activeModal.close('success');
        ToastManagerService.toastSuccess(res.message);
        this.isSaving = false;
      },
      error: (err) => {
        this.isSaving = false;
        this.errorMsg = err.error.errors;
        ToastManagerService.toastWarning(err.error.message);
      }
    })
  }

  updateForm(UserDto: UserDto): void {
    this.userForm.patchValue({
      name: UserDto.nom,
      email: UserDto.email,
      login: UserDto.login,
      phone: UserDto.phone,
      address: UserDto.adresse,
      activated: UserDto?.activer
    });
  }

}
