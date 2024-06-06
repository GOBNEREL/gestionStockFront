import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthJwtService} from "../../core/auth/auth-jwt.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationRequestBean} from "../../../gs-api/src/models/authentication-request-bean";
import {ToastManagerService} from "../../shared/service/toast-manager.service";
import {WebStorageService} from "../../core/auth/web-storage.service";
import { AuthenticateApiService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorMessage = '';
  otpVisible = false;
  isSaving = false;

  loginForm = this.fb.group({
    login: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    otp: [null],
  });

  constructor(
    private fb: FormBuilder,
    private authJwtService: AuthJwtService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storage: WebStorageService,
    private authenticationService: AuthenticateApiService,
  ) {
  }

  // loginWithOtp(): void {
  //   this.isSaving = true;
  //   this.authJwtService.loginWithOtp(this.saveValue()).subscribe(() => {
  //     this.isSaving = false;
  //     let typeService = this.storage.getService();
  //     this.router.navigate(['member/dashboard']).then(() => {
  //     });

  //   }, error => {
  //     this.errorMessage = error?.error?.message;
  //     this.isSaving = false;
  //   })
  // }

  loginWithUsernameAndPassword(): void {
    this.isSaving = true;
    // this.router.navigate(['member/dashboard']).then(() => {
    // });
    console.log("Something happens");
    this.authJwtService.loginWithOtp(this.saveValue()).subscribe(
      (response) => {
        this.isSaving = false;
        this.router.navigate(['../member/dashboard'],{relativeTo: this.activatedRoute}).then(() => {
              });
        this.errorMessage = '';
      }, error => {
        this.errorMessage = error?.error?.message;
        this.isSaving = false;
      })
  }

  saveValue(): AuthenticationRequestBean {
    return {
      login: this.loginForm?.get('login')?.value ?? '',
      password: this.loginForm?.get('password')?.value ?? '',
    }
  }

}
