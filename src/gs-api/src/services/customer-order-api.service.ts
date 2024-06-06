import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MessageNotification } from '../models/message-notification';
import { CustomerOrderCriteria, CustomerOrderDto } from '../models';

@Injectable({
    providedIn: 'root',
  })
  class CustomerOrderApiService extends __BaseService {
    static readonly findByCriteriaPath = '/api/stockManagement/v1/customerOrder/findByCriteria';
    static readonly findWithCodePath = '/api/stockManagement/v1/customerOrder/findWithCode';
    static readonly findWithIdPath = '/api/stockManagement/v1/customerOrder/findWithId';
    static readonly savePath = '/api/stockManagement/v1/customerOrder/save';
  
    constructor(
      config: __Configuration,
      http: HttpClient
    ) {
      super(config, http);
    }
  
    /**
     * Liste tous les établissements du systéme
     *
     * Cette methode permet de lister tous les établissements du systeme
     * @param params The `EtablissementApiService.FindByEtablissementCriteriaParams` containing the following parameters:
     *
     * - `language`:
     *
     * - `body`:
     *
     * @return Empty list or a list of boroughs returned
     */
    findByCriteriaResponse(params: CustomerOrderApiService.FindByCriteriaParams): __Observable<__StrictHttpResponse<Array<CustomerOrderDto>>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;
      if (params.language != null) __params = __params.set('language', params.language.toString());
      __body = params.body;
      let req = new HttpRequest<any>(
        'POST',
        this.rootUrl + `/api/stockManagement/v1/customerOrder/findByCriteria`,
        __body,
        {
          headers: __headers,
          params: __params,
          responseType: 'json'
        });
  
      return this.http.request<any>(req).pipe(
        __filter(_r => _r instanceof HttpResponse),
        __map((_r) => {
          return _r as __StrictHttpResponse<Array<CustomerOrderDto>>;
        })
      );
    }
    /**
     * Liste tous les établissements du systéme
     *
     * Cette methode permet de lister tous les établissements du systeme
     * @param params The `EtablissementApiService.FindByEtablissementCriteriaParams` containing the following parameters:
     *
     * - `language`:
     *
     * - `body`:
     *
     * @return Empty list or a list of boroughs returned
     */
    findByCriteria(params: CustomerOrderApiService.FindByCriteriaParams): __Observable<Array<CustomerOrderDto>> {
      return this.findByCriteriaResponse(params).pipe(
        __map(_r => _r.body as Array<CustomerOrderDto>)
      );
    }
  
    /**
     * Liste tous les établissements du systéme a partir du code
     *
     * Cette methode permet de lister tous les établissements dh du systeme a partir du code
     * @param params The `EtablissementApiService.FindEtablissementWithCodeParams` containing the following parameters:
     *
     * - `code`:
     *
     * - `language`:
     *
     * @return Liste vide ou liste des établissements retournés avec succes
     */
    findWithCodeResponse(params: CustomerOrderApiService.FindWithCodeParams): __Observable<__StrictHttpResponse<CustomerOrderDto>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;
      if (params.code != null) __params = __params.set('code', params.code.toString());
      if (params.language != null) __params = __params.set('language', params.language.toString());
      let req = new HttpRequest<any>(
        'GET',
        this.rootUrl + `/api/stockManagement/v1/customerOrder/findWithCode`,
        __body,
        {
          headers: __headers,
          params: __params,
          responseType: 'json'
        });
  
      return this.http.request<any>(req).pipe(
        __filter(_r => _r instanceof HttpResponse),
        __map((_r) => {
          return _r as __StrictHttpResponse<CustomerOrderDto>;
        })
      );
    }
    /**
     * Liste tous les établissements du systéme a partir du code
     *
     * Cette methode permet de lister tous les établissements dh du systeme a partir du code
     * @param params The `EtablissementApiService.FindEtablissementWithCodeParams` containing the following parameters:
     *
     * - `code`:
     *
     * - `language`:
     *
     * @return Liste vide ou liste des établissements retournés avec succes
     */
    findWithCode(params: CustomerOrderApiService.FindWithCodeParams): __Observable<CustomerOrderDto> {
      return this.findWithCodeResponse(params).pipe(
        __map(_r => _r.body as CustomerOrderDto)
      );
    }
  
    /**
     * Liste tous les établissements du systéme a partir de l'id
     *
     * Cette methode permet de lister tous les établissements du systeme a partir de l'id
     * @param params The `EtablissementApiService.FindEtablissementWithIdParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `language`:
     *
     * @return Liste vide ou liste des établissements retournés avec succes
     */
    findWithIdResponse(params: CustomerOrderApiService.FindWithIdParams): __Observable<__StrictHttpResponse<CustomerOrderDto>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;
      if (params.id != null) __params = __params.set('id', params.id.toString());
      if (params.language != null) __params = __params.set('language', params.language.toString());
      let req = new HttpRequest<any>(
        'GET',
        this.rootUrl + `/api/stockManagement/v1/customerOrder/findWithId`,
        __body,
        {
          headers: __headers,
          params: __params,
          responseType: 'json'
        });
  
      return this.http.request<any>(req).pipe(
        __filter(_r => _r instanceof HttpResponse),
        __map((_r) => {
          return _r as __StrictHttpResponse<CustomerOrderDto>;
        })
      );
    }
    /**
     * Liste tous les établissements du systéme a partir de l'id
     *
     * Cette methode permet de lister tous les établissements du systeme a partir de l'id
     * @param params The `EtablissementApiService.FindEtablissementWithIdParams` containing the following parameters:
     *
     * - `id`:
     *
     * - `language`:
     *
     * @return Liste vide ou liste des établissements retournés avec succes
     */
    findWithId(params: CustomerOrderApiService.FindWithIdParams): __Observable<CustomerOrderDto> {
      return this.findWithIdResponse(params).pipe(
        __map(_r => _r.body as CustomerOrderDto)
      );
    }
  
    /**
     * Enregistrer un établissement
     *
     * cette methode permet d'ajouter un établissement
     * @param params The `EtablissementApiService.SaveEtablissementParams` containing the following parameters:
     *
     * - `language`:
     *
     * - `body`:
     *
     * @return Liste vide ou liste des établissements avec succes
     */
    saveResponse(params: CustomerOrderApiService.SaveParams): __Observable<__StrictHttpResponse<MessageNotification>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;
      if (params.language != null) __params = __params.set('language', params.language.toString());
      __body = params.body;
      let req = new HttpRequest<any>(
        'POST',
        this.rootUrl + `/api/stockManagement/v1/customerOrder/save`,
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
     * Enregistrer un établissement
     *
     * cette methode permet d'ajouter un établissement
     * @param params The `EtablissementApiService.SaveEtablissementParams` containing the following parameters:
     *
     * - `language`:
     *
     * - `body`:
     *
     * @return Liste vide ou liste des établissements avec succes
     */
    save(params: CustomerOrderApiService.SaveParams): __Observable<MessageNotification> {
      return this.saveResponse(params).pipe(
        __map(_r => _r.body as MessageNotification)
      );
    }
  }
  
  module CustomerOrderApiService {
  
    /**
     * Parameters for findByEtablissementCriteria
     */
    export interface FindByCriteriaParams {
      language?: string;
      body?: CustomerOrderCriteria;
    }
  
    /**
     * Parameters for findEtablissementWithCode
     */
    export interface FindWithCodeParams {
      code: string;
      language?: string;
    }
  
    /**
     * Parameters for findEtablissementWithId
     */
    export interface FindWithIdParams {
      id: number;
      language?: string;
    }
  
    /**
     * Parameters for saveEtablissement
     */
    export interface SaveParams {
      language?: string;
      body?: CustomerOrderDto;
    }
  }
  
  export { CustomerOrderApiService }