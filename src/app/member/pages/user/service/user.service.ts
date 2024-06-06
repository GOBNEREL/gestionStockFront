import { Injectable } from '@angular/core';
import {UtilisateurApiService} from "../../../../../gs-api/src/services/utilisateur-api.service";
import {Observable} from "rxjs";
import {MessageNotification} from "../../../../../gs-api/src/models/message-notification";
import {UtilisateurCriteria} from "../../../../../gs-api/src/models/utilisateur-criteria";
import ChangeStatusOfUserParams = UtilisateurApiService.ChangeStatusOfUserParams;
import SaveUserParams = UtilisateurApiService.SaveUserParams;
import {UserDto} from "../../../../../gs-api/src/models/user-dto";
import {AccountService} from "../../../../core/auth/account.service";
import UpdateParams = UtilisateurApiService.UpdateParams;
import ChangePasswordParams = UtilisateurApiService.ChangePasswordParams;
import AddAuthoritiesOfUserParams = UtilisateurApiService.AddAuthoritiesOfUserParams;

import {AuthoritiesOfUserBean} from "../../../../../gs-api/src/models/authorities-of-user-bean";
import SearchByLoginParams = UtilisateurApiService.SearchByLoginParams;
import DeleteAuthoritiesToUserParams = UtilisateurApiService.DeleteAuthoritiesToUserParams;
import ResetPasswordParams = UtilisateurApiService.ResetPasswordParams;
import ListAuthoritiesOfUserParams = UtilisateurApiService.ListAuthoritiesOfUserParams;
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = 'http://localhost:8098';

  constructor(
    private utilisateurApiService: UtilisateurApiService,
    private http: HttpClient,
    private accountService: AccountService
  ) { }

  saveUser(params: SaveUserParams): Observable<MessageNotification>{
    return this.utilisateurApiService.saveUser(params);
  }
  update(params: UpdateParams): Observable<MessageNotification>{
    return this.utilisateurApiService.update(params);
  }
  changePassword(changePassword: ChangePasswordParams): Observable<MessageNotification> {
    return this.accountService.changePassword(changePassword);
  }
  changeStatusOfUser(params: ChangeStatusOfUserParams): Observable<MessageNotification> {
    return this.utilisateurApiService.changeStatusOfUser(params);
  }
  getCurrentUser(): Observable<UserDto> {
    return this.utilisateurApiService.getCurrentUser();
  }

  addAuthoritiesOfUser(params: AddAuthoritiesOfUserParams): Observable<MessageNotification> {
    return this.utilisateurApiService.addAuthoritiesOfUser(params);
  }


  SearchByLogin(findByLogin: SearchByLoginParams): Observable<UserDto> {
    return this.utilisateurApiService.SearchByLogin(findByLogin);
  }

  findAll(body: UtilisateurCriteria): Observable<UtilisateurCriteria[]> {
    return this.utilisateurApiService.findUtilisateurByCriteria(body);
  }

  deleteAuthorities(params: DeleteAuthoritiesToUserParams): Observable<MessageNotification> {
    return this.utilisateurApiService.deleteAuthoritiesToUser(params);
  }

  listAuthoritiesOfUser(params: ListAuthoritiesOfUserParams): Observable<AuthoritiesOfUserBean> {
    return this.utilisateurApiService.listAuthoritiesOfUser(params);
  }
  resetPassword(resetPassword: ResetPasswordParams): Observable<MessageNotification> {
    return this.utilisateurApiService.resetPassword(resetPassword);
  }

  // public listUserEncadreur(language: string): Observable<UserDto[]> {
  //   return this.http.post<UserDto[]>(`${this.apiServerUrl}/api/skystagiaire/v1/users/listUserEncadreur`,language);
  // }
}
