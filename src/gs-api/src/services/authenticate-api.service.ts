/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AuthenticationResponseBean } from '../models/authentication-response-bean';
import { AuthenticationRequestBean } from '../models/authentication-request-bean';
import { MessageNotification } from '../models/message-notification';
import { ChangePasswordBean } from '../models/change-password-bean';
import { UserDto } from '../models/user-dto';
@Injectable({
  providedIn: 'root',
})
class AuthenticateApiService extends __BaseService {
  static readonly authenticateByLoginAndPasswordPath = '/api/stockManagement/v1/authenticate/loginAndPassword';
  static readonly logoutPath = '/api/stockManagement/v1/logout';
  static readonly changePasswordPath = '/api/stockManagement/v1/users/changePassword';
  static readonly currentUserPath = '/api/stockManagement/v1/users/currentUser';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Première authentification
   *
   * Cette méthode permet de s'authentifier à l'application
   * @param body undefined
   * @return L'utilisateur a été authentifié avec succès
   */
  authenticateByLoginAndPasswordResponse(body?: AuthenticationRequestBean): __Observable<__StrictHttpResponse<AuthenticationResponseBean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/stockManagement/v1/authenticate/loginAndPassword`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponseBean>;
      })
    );
  }
  /**
   * Première authentification
   *
   * Cette méthode permet de s'authentifier à l'application
   * @param body undefined
   * @return L'utilisateur a été authentifié avec succès
   */
  authenticateByLoginAndPassword(body?: AuthenticationRequestBean): __Observable<AuthenticationResponseBean> {
    return this.authenticateByLoginAndPasswordResponse(body).pipe(
      __map(_r => _r.body as AuthenticationResponseBean)
    );
  }

  /**
   * Deconnexion à la plateforme
   *
   * Cette méthode permet de se déconencter à l'application
   */
  logoutResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stockManagement/v1/logout`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Deconnexion à la plateforme
   *
   * Cette méthode permet de se déconencter à l'application
   */
  logout(): __Observable<null> {
    return this.logoutResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Changer le mot de passe
   *
   * Cette méthode permet de changer le mot de passe de l'utilisateur connecté
   * @param params The `AuthenticateApiService.ChangePasswordParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `body`:
   *
   * @return Le mot de passe a été changé avec succès
   */
  changePasswordResponse(params: AuthenticateApiService.ChangePasswordParams): __Observable<__StrictHttpResponse<MessageNotification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.language != null) __params = __params.set('language', params.language.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/stockManagement/v1/users/changePassword`,
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
   * @param params The `AuthenticateApiService.ChangePasswordParams` containing the following parameters:
   *
   * - `language`:
   *
   * - `body`:
   *
   * @return Le mot de passe a été changé avec succès
   */
  changePassword(params: AuthenticateApiService.ChangePasswordParams): __Observable<MessageNotification> {
    return this.changePasswordResponse(params).pipe(
      __map(_r => _r.body as MessageNotification)
    );
  }

  /**
   * Retourne l'utilisateur connecté
   *
   * Cette méthode permet de retourner les informations de l'utilisateur connecté
   * @return Informations de l'utilisateur retournées avec succès
   */
  currentUserResponse(): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/stockManagement/v1/users/currentUser`,
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
   * Retourne l'utilisateur connecté
   *
   * Cette méthode permet de retourner les informations de l'utilisateur connecté
   * @return Informations de l'utilisateur retournées avec succès
   */
  currentUser(): __Observable<UserDto> {
    return this.currentUserResponse().pipe(
      __map(_r => _r.body as UserDto)
    );
  }
}

module AuthenticateApiService {

  /**
   * Parameters for changePassword
   */
  export interface ChangePasswordParams {
    language: string;
    body?: ChangePasswordBean;
  }
}

export { AuthenticateApiService }
