/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDto } from '../models/user-dto';
import { MessageNotification } from '../models/message-notification';
import { AuthoritiesBean } from '../models/authorities-bean';
import { ChangePasswordBean } from '../models/change-password-bean';
import { UtilisateurCriteria } from '../models/utilisateur-criteria';
import { AuthoritiesOfUserBean } from '../models/authorities-of-user-bean';
import { UserSaveBean } from '../models/user-save-bean';
@Injectable({
  providedIn: 'root',
})
class UtilisateurApiService extends __BaseService {
  static readonly SearchByLoginPath = '/api/stockManagement/v1/users/SearchByLogin/{login}/{language}';
  static readonly addAuthoritiesOfUserPath = '/api/stockManagement/v1/users/addAuthoritiesToUser';
  static readonly changeStatusOfUserPath = '/api/stockManagement/v1/users/changeStatusOfUser';
  static readonly changePasswordPath = '/api/stockManagement/v1/users/changesPassword';
  static readonly deleteAuthoritiesToUserPath = '/api/stockManagement/v1/users/deleteAuthoritiesToUser';
  static readonly findByIdPath = '/api/stockManagement/v1/users/findUserById';
  static readonly findUtilisateurByCriteriaPath = '/api/stockManagement/v1/users/findUtilisateurByCriteria';
  static readonly getCurrentUserPath = '/api/stockManagement/v1/users/getCurrentUser';
  static readonly listAuthoritiesOfUserPath = '/api/stockManagement/v1/users/listAuthoritiesOfUser';
  static readonly resetPasswordPath = '/api/stockManagement/v1/users/resetPassword/{login}/{language}';
  static readonly saveUserPath = '/api/stockManagement/v1/users/saveUser';
  static readonly updatePath = '/api/stockManagement/v1/users/update';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Retourne les information de l'utilisateur à partir de son login
   *
   * Cette méthode permet de retourner les information de l'utilisateur à partir de son login
   * @param params The `UtilisateurApiService.SearchByLoginParams` containing the following parameters:
   *
   * - `login`:
   *
   * - `language`:
   *
   * @return Informations de l'utilisateur retournées avec succès
   */
  SearchByLoginResponse(params: UtilisateurApiService.SearchByLoginParams): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stockManagement/v1/users/SearchByLogin/${encodeURIComponent(String(params.login))}/${encodeURIComponent(String(params.language))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * Retourne les information de l'utilisateur à partir de son login
   *
   * Cette méthode permet de retourner les information de l'utilisateur à partir de son login
   * @param params The `UtilisateurApiService.SearchByLoginParams` containing the following parameters:
   *
   * - `login`:
   *
   * - `language`:
   *
   * @return Informations de l'utilisateur retournées avec succès
   */
  SearchByLogin(params: UtilisateurApiService.SearchByLoginParams): __Observable<UserDto> {
    return this.SearchByLoginResponse(params).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * Ajoute les rôles à l'utiliasteur
   * @param params The `UtilisateurApiService.AddAuthoritiesOfUserParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  addAuthoritiesOfUserResponse(params: UtilisateurApiService.AddAuthoritiesOfUserParams): __Observable<__StrictHttpResponse<MessageNotification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.language != null) __params = __params.set('language', params.language.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/stockManagement/v1/users/addAuthoritiesToUser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MessageNotification>;
      })
    );
  }
  /**
   * Ajoute les rôles à l'utiliasteur
   * @param params The `UtilisateurApiService.AddAuthoritiesOfUserParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  addAuthoritiesOfUser(params: UtilisateurApiService.AddAuthoritiesOfUserParams): __Observable<MessageNotification> {
    return this.addAuthoritiesOfUserResponse(params).pipe(
      __map(_r => _r.body as MessageNotification)
    );
  }

  /**
   * Change le statut de l'utilisateur
   *
   * Cette méthode permet de changer le statut de l'utillisateur à partir de son identifiant
   * @param params The `UtilisateurApiService.ChangeStatusOfUserParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `idUser`:
   *
   * @return Le statut de l'utilisateur a été changé avec succès
   */
  changeStatusOfUserResponse(params: UtilisateurApiService.ChangeStatusOfUserParams): __Observable<__StrictHttpResponse<MessageNotification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stockManagement/v1/users/changeStatusOfUser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MessageNotification>;
      })
    );
  }
  /**
   * Change le statut de l'utilisateur
   *
   * Cette méthode permet de changer le statut de l'utillisateur à partir de son identifiant
   * @param params The `UtilisateurApiService.ChangeStatusOfUserParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `idUser`:
   *
   * @return Le statut de l'utilisateur a été changé avec succès
   */
  changeStatusOfUser(params: UtilisateurApiService.ChangeStatusOfUserParams): __Observable<MessageNotification> {
    return this.changeStatusOfUserResponse(params).pipe(
      __map(_r => _r.body as MessageNotification)
    );
  }

  /**
   * Changer le mot de passe
   *
   * Cette méthode permet de changer le mot de passe de l'utilisateur connecté
   * @param params The `UtilisateurApiService.ChangePasswordParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `body`:
   *
   * @return Le mot de passe a été changé avec succès
   */
  changePasswordResponse(params: UtilisateurApiService.ChangePasswordParams): __Observable<__StrictHttpResponse<MessageNotification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.language != null) __params = __params.set('language', params.language.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/stockManagement/v1/users/changesPassword`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MessageNotification>;
      })
    );
  }
  /**
   * Changer le mot de passe
   *
   * Cette méthode permet de changer le mot de passe de l'utilisateur connecté
   * @param params The `UtilisateurApiService.ChangePasswordParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `body`:
   *
   * @return Le mot de passe a été changé avec succès
   */
  changePassword(params: UtilisateurApiService.ChangePasswordParams): __Observable<MessageNotification> {
    return this.changePasswordResponse(params).pipe(
      __map(_r => _r.body as MessageNotification)
    );
  }

  /**
   * Supprime les rôles à l'utiliasteur
   * @param params The `UtilisateurApiService.DeleteAuthoritiesToUserParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  deleteAuthoritiesToUserResponse(params: UtilisateurApiService.DeleteAuthoritiesToUserParams): __Observable<__StrictHttpResponse<MessageNotification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.language != null) __params = __params.set('language', params.language.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/stockManagement/v1/users/deleteAuthoritiesToUser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MessageNotification>;
      })
    );
  }
  /**
   * Supprime les rôles à l'utiliasteur
   * @param params The `UtilisateurApiService.DeleteAuthoritiesToUserParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  deleteAuthoritiesToUser(params: UtilisateurApiService.DeleteAuthoritiesToUserParams): __Observable<MessageNotification> {
    return this.deleteAuthoritiesToUserResponse(params).pipe(
      __map(_r => _r.body as MessageNotification)
    );
  }

  /**
   * Lister les utilisateurs du système
   *
   * Cette méthode permet de lister les utilisateurs du système
   * @param body undefined
   * @return Liste vide ou une liste d'utilisateur retournée
   */
  findUtilisateurByCriteriaResponse(body?: UtilisateurCriteria): __Observable<__StrictHttpResponse<Array<UserDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/stockManagement/v1/users/findUtilisateurByCriteria`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDto>>;
      })
    );
  }
  /**
   * Lister les utilisateurs du système
   *
   * Cette méthode permet de lister les utilisateurs du système
   * @param body undefined
   * @return Liste vide ou une liste d'utilisateur retournée
   */
  findUtilisateurByCriteria(body?: UtilisateurCriteria): __Observable<Array<UserDto>> {
    return this.findUtilisateurByCriteriaResponse(body).pipe(
      __map(_r => _r.body as Array<UserDto>)
    );
  }

  /**
   * Lister les utilisateurs du système
   *
   * Cette méthode permet de lister les utilisateurs du système
   * @return Liste vide ou une liste d'utilisateur retournée
   */
  getCurrentUserResponse(): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stockManagement/v1/users/getCurrentUser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * Lister les utilisateurs du système
   *
   * Cette méthode permet de lister les utilisateurs du système
   * @return Liste vide ou une liste d'utilisateur retournée
   */
  getCurrentUser(): __Observable<UserDto> {
    return this.getCurrentUserResponse().pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * Liste des rôles de l'utilisateur ainsi que les rôles qu'il n'a pas
   * @param params The `UtilisateurApiService.ListAuthoritiesOfUserParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  listAuthoritiesOfUserResponse(params: UtilisateurApiService.ListAuthoritiesOfUserParams): __Observable<__StrictHttpResponse<AuthoritiesOfUserBean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.language != null) __params = __params.set('language', params.language.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/stockManagement/v1/users/listAuthoritiesOfUser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthoritiesOfUserBean>;
      })
    );
  }
  /**
   * Liste des rôles de l'utilisateur ainsi que les rôles qu'il n'a pas
   * @param params The `UtilisateurApiService.ListAuthoritiesOfUserParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  listAuthoritiesOfUser(params: UtilisateurApiService.ListAuthoritiesOfUserParams): __Observable<AuthoritiesOfUserBean> {
    return this.listAuthoritiesOfUserResponse(params).pipe(
      __map(_r => _r.body as AuthoritiesOfUserBean)
    );
  }

  /**
   * Reinitialiser le mot de passe d'un utilisateur
   *
   * Cette méthode permet de reinitialiser le mot de passe d'un utilisateur
   * @param params The `UtilisateurApiService.ResetPasswordParams` containing the following parameters:
   *
   * - `login`:
   *
   * - `language`:
   *
   * @return Le mot de passe a été reinitialisé avec succès
   */
  resetPasswordResponse(params: UtilisateurApiService.ResetPasswordParams): __Observable<__StrictHttpResponse<MessageNotification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stockManagement/v1/users/resetPassword/${encodeURIComponent(String(params.login))}/${encodeURIComponent(String(params.language))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MessageNotification>;
      })
    );
  }
  /**
   * Reinitialiser le mot de passe d'un utilisateur
   *
   * Cette méthode permet de reinitialiser le mot de passe d'un utilisateur
   * @param params The `UtilisateurApiService.ResetPasswordParams` containing the following parameters:
   *
   * - `login`:
   *
   * - `language`:
   *
   * @return Le mot de passe a été reinitialisé avec succès
   */
  resetPassword(params: UtilisateurApiService.ResetPasswordParams): __Observable<MessageNotification> {
    return this.resetPasswordResponse(params).pipe(
      __map(_r => _r.body as MessageNotification)
    );
  }

  /**
   * Créer un nouvel utilisateur
   *
   * Cette méthode permet de créer un nouvel utilisateur dans le système
   * @param params The `UtilisateurApiService.SaveUserParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `body`:
   *
   * @return L'utilisateur a été créé avec succès
   */
  saveUserResponse(params: UtilisateurApiService.SaveUserParams): __Observable<__StrictHttpResponse<MessageNotification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.language != null) __params = __params.set('language', params.language.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/stockManagement/v1/users/saveUser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MessageNotification>;
      })
    );
  }
  /**
   * Créer un nouvel utilisateur
   *
   * Cette méthode permet de créer un nouvel utilisateur dans le système
   * @param params The `UtilisateurApiService.SaveUserParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `body`:
   *
   * @return L'utilisateur a été créé avec succès
   */
  saveUser(params: UtilisateurApiService.SaveUserParams): __Observable<MessageNotification> {
    return this.saveUserResponse(params).pipe(
      __map(_r => _r.body as MessageNotification)
    );
  }

  /**
   * Modifier les inofrmations de l'utiliateur
   * @param params The `UtilisateurApiService.UpdateParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  updateResponse(params: UtilisateurApiService.UpdateParams): __Observable<__StrictHttpResponse<MessageNotification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.language != null) __params = __params.set('language', params.language.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/stockManagement/v1/users/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MessageNotification>;
      })
    );
  }
  /**
   * Modifier les inofrmations de l'utiliateur
   * @param params The `UtilisateurApiService.UpdateParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  update(params: UtilisateurApiService.UpdateParams): __Observable<MessageNotification> {
    return this.updateResponse(params).pipe(
      __map(_r => _r.body as MessageNotification)
    );
  }
}

module UtilisateurApiService {

  /**
   * Parameters for SearchByLogin
   */
  export interface SearchByLoginParams {
    login: string;
    language: string;
  }

  /**
   * Parameters for addAuthoritiesOfUser
   */
  export interface AddAuthoritiesOfUserParams {
    language: string;
    body?: AuthoritiesBean;
  }

  /**
   * Parameters for changeStatusOfUser
   */
  export interface ChangeStatusOfUserParams {
    language: string;
    idUser: number;
  }

  /**
   * Parameters for changePassword
   */
  export interface ChangePasswordParams {
    language?: string;
    body?: ChangePasswordBean;
  }

  /**
   * Parameters for deleteAuthoritiesToUser
   */
  export interface DeleteAuthoritiesToUserParams {
    language: string;
    body?: AuthoritiesBean;
  }

  /**
   * Parameters for findById
   */
  export interface FindByIdParams {
    id: number;
    language?: string;
  }

  /**
   * Parameters for listAuthoritiesOfUser
   */
  export interface ListAuthoritiesOfUserParams {
    language?: string;
    body?: AuthoritiesOfUserBean;
  }

  /**
   * Parameters for resetPassword
   */
  export interface ResetPasswordParams {
    login: string;
    language: string;
  }

  /**
   * Parameters for saveUser
   */
  export interface SaveUserParams {
    language?: string;
    body?: UserSaveBean;
  }

  /**
   * Parameters for update
   */
  export interface UpdateParams {
    language: string;
    body?: UserSaveBean;
  }
}

export { UtilisateurApiService }
