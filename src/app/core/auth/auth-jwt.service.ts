import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {WebStorageService} from "./web-storage.service";
import {AccountService} from "./account.service";
import {map} from "rxjs/operators";
import {ToastManagerService} from "../../shared/service/toast-manager.service";
import { AuthenticationRequestBean } from 'src/gs-api/src/models/authentication-request-bean';
import { AuthenticationResponseBean } from 'src/gs-api/src/models/authentication-response-bean';
import { AuthenticateApiService } from 'src/gs-api/src/services/authenticate-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthJwtService {

  constructor(
    private webStorageService: WebStorageService,
    private router: Router,
    private accountService: AccountService,
    private authenticationService: AuthenticateApiService
  ) {
  }

  loginWithOtp(authentificationRequest: AuthenticationRequestBean): Observable<void> {
    return this.authenticationService.authenticateByLoginAndPassword(authentificationRequest)
      .pipe(map(response => this.authenficationSuccess(response)));
  }

  isAuthentificated(): boolean {
    if (this.webStorageService.getToken()) {
      return true;
    }
    this.router.navigate(['login']).then(() => {
    });
    return false;
  }

  logout(): void {
    this.authenticationService.logout().subscribe({
      next: () => {
        this.router.navigate(['login']).then(() => {
        });
        this.webStorageService.clearToken();
      }
    });
  }

  logoutWithoutObserver(): void {
    this.webStorageService.clearToken();
    this.accountService.authenticate(null);
    this.router.navigate(['login']).then(() => {
    });
  }

  private authenficationSuccess(authentificationResponse: AuthenticationResponseBean): void {
    this.accountService.identity(true);
    this.webStorageService.storeToken(authentificationResponse.accessToken, true);
    ToastManagerService.toastSuccess(authentificationResponse.message);
  }


}
