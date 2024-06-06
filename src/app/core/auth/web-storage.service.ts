import {Injectable} from '@angular/core';
import {LocalStorageService, SessionStorageService} from "ngx-webstorage";

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor(
    private $localStorage: LocalStorageService,
    private $sessionsStorage: SessionStorageService
  ) {
  }

  storeToken(token?: string, remember?: boolean): void {
    if (remember) {
      this.$localStorage.store("access_token_care_cameroon", token);
    } else {
      this.$sessionsStorage.store("access_token_care_cameroon", token);
    }
  }

  getLanguage(): string {
    return localStorage.getItem('language') ?? 'fr';
  }


  getService(): string {
    return this.$localStorage.retrieve('user_type_service') ?? '';
  }

  storeService(service: string) {
    this.$localStorage.store("user_type_service", service);
  }

  getToken(): string {
    if (this.$sessionsStorage.retrieve("access_token_care_cameroon")) {
      return this.$sessionsStorage.retrieve("access_token_care_cameroon");
    } else {
      return this.$localStorage.retrieve("access_token_care_cameroon");
    }
  }

  clearService(): void {
    this.$localStorage.clear("user_type_service");
  }

  clearToken(): void {
    this.$sessionsStorage.clear("access_token_care_cameroon");
    this.$localStorage.clear("access_token_care_cameroon");
    this.$localStorage.clear("user_type_service");
  }

  setCurrentUser(current_user?: string): void {
    this.$localStorage.store("access_current_user", current_user);
  }

  getCurrentUser(): string {
    return this.$localStorage.retrieve("access_current_user");
  }

}
