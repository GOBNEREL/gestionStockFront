import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, Observable, of, ReplaySubject, shareReplay, tap} from "rxjs";
import {MessageNotification, RolesDto, UserDto} from "../../../gs-api/src/models";
import {WebStorageService} from "./web-storage.service";
import { UtilisateurApiService } from 'src/gs-api/src/services';
import ChangePasswordParams = UtilisateurApiService.ChangePasswordParams;

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  user: UserDto = {};
  private userIdentity: UserDto | null = null;
  private authenticationState = new ReplaySubject<UserDto | null>(1);
  private accountCache$?: Observable<UserDto | null>;
  private currentUserSubject = new BehaviorSubject<UserDto | null>({});

  constructor(
    public userService: UtilisateurApiService,
    private storage: WebStorageService
  ) {
  }

  getCurrentUser(): Observable<UserDto> {
    return this.userService.getCurrentUser();
  }

  hasAnyAuthority(authorities: string[] | string | undefined): boolean {
    if (!this.userIdentity || !this.userIdentity.roles) {
      return false;
    }
    if (!Array.isArray(authorities)) {
      authorities = [authorities ?? ''];
    }
    return this.userIdentity.roles.some((authority: RolesDto) => authorities?.includes(authority.nom ?? ''));
  }

  collectCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: res => {
        this.user = res;
      }
    })
  }

  hasAnyService(services: string[] | string | undefined): boolean {
    this.collectCurrentUser();
    if (!Array.isArray(services)) {
      services = [services ?? ''];
    }
    return services.includes(this.storage.getService());

  }

  identity(force?: boolean): Observable<UserDto | null> {
    if (!this.accountCache$ || force || !this.isAuthenticated()) {
      this.accountCache$ = this.getCurrentUser().pipe(
        catchError(() => of(null)),
        tap((account: UserDto | null) => {
          this.authenticate(account);
        }),
        shareReplay()
      );
    }
    return this.accountCache$;
  }

  authenticate(identity: UserDto | null): void {
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
    this.currentUserSubject.next(this.userIdentity);
  }

  isAuthenticated(): boolean {
    return this.userIdentity !== null;
  }

  getAuthenticationState(): Observable<UserDto | null> {
    return this.authenticationState.asObservable();
  }

  getCurrentUserValue(): UserDto | null {
    return this.currentUserSubject.value;
  }

  changePassword(changePassword: ChangePasswordParams): Observable<MessageNotification> {
    return this.userService.changePassword(changePassword);
  }

}
