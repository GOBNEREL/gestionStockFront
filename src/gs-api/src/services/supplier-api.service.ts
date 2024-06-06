import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MessageNotification } from '../models/message-notification';
import { SupplierCriteria, SupplierDto } from '../models';

@Injectable({
    providedIn: 'root',
  })
  class SupplierApiService extends __BaseService {
    static readonly findByCriteriaPath = '/api/stockManagement/v1/supplier/findByCriteria';
    static readonly findWithCodePath = '/api/stockManagement/v1/supplier/findWithCode';
    static readonly findWithIdPath = '/api/stockManagement/v1/supplier/findWithId';
    static readonly savePath = '/api/stockManagement/v1/supplier/save';
  
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
    findByCriteriaResponse(params: SupplierApiService.FindByCriteriaParams): __Observable<__StrictHttpResponse<Array<SupplierDto>>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;
      if (params.language != null) __params = __params.set('language', params.language.toString());
      __body = params.body;
      let req = new HttpRequest<any>(
        'POST',
        this.rootUrl + `/api/stockManagement/v1/supplier/findByCriteria`,
        __body,
        {
          headers: __headers,
          params: __params,
          responseType: 'json'
        });
  
      return this.http.request<any>(req).pipe(
        __filter(_r => _r instanceof HttpResponse),
        __map((_r) => {
          return _r as __StrictHttpResponse<Array<SupplierDto>>;
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
    findByCriteria(params: SupplierApiService.FindByCriteriaParams): __Observable<Array<SupplierDto>> {
      return this.findByCriteriaResponse(params).pipe(
        __map(_r => _r.body as Array<SupplierDto>)
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
    findWithCodeResponse(params: SupplierApiService.FindWithCodeParams): __Observable<__StrictHttpResponse<SupplierDto>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;
      if (params.code != null) __params = __params.set('code', params.code.toString());
      if (params.language != null) __params = __params.set('language', params.language.toString());
      let req = new HttpRequest<any>(
        'GET',
        this.rootUrl + `/api/stockManagement/v1/supplier/findWithCode`,
        __body,
        {
          headers: __headers,
          params: __params,
          responseType: 'json'
        });
  
      return this.http.request<any>(req).pipe(
        __filter(_r => _r instanceof HttpResponse),
        __map((_r) => {
          return _r as __StrictHttpResponse<SupplierDto>;
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
    findWithCode(params: SupplierApiService.FindWithCodeParams): __Observable<SupplierDto> {
      return this.findWithCodeResponse(params).pipe(
        __map(_r => _r.body as SupplierDto)
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
    findWithIdResponse(params: SupplierApiService.FindWithIdParams): __Observable<__StrictHttpResponse<SupplierDto>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;
      if (params.id != null) __params = __params.set('id', params.id.toString());
      if (params.language != null) __params = __params.set('language', params.language.toString());
      let req = new HttpRequest<any>(
        'GET',
        this.rootUrl + `/api/stockManagement/v1/supplier/findWithId`,
        __body,
        {
          headers: __headers,
          params: __params,
          responseType: 'json'
        });
  
      return this.http.request<any>(req).pipe(
        __filter(_r => _r instanceof HttpResponse),
        __map((_r) => {
          return _r as __StrictHttpResponse<SupplierDto>;
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
    findWithId(params: SupplierApiService.FindWithIdParams): __Observable<SupplierDto> {
      return this.findWithIdResponse(params).pipe(
        __map(_r => _r.body as SupplierDto)
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
    saveResponse(params: SupplierApiService.SaveParams): __Observable<__StrictHttpResponse<MessageNotification>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;
      if (params.language != null) __params = __params.set('language', params.language.toString());
      __body = params.body;
      let req = new HttpRequest<any>(
        'POST',
        this.rootUrl + `/api/stockManagement/v1/supplier/save`,
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
    save(params: SupplierApiService.SaveParams): __Observable<MessageNotification> {
      return this.saveResponse(params).pipe(
        __map(_r => _r.body as MessageNotification)
      );
    }
  }
  
  module SupplierApiService {
  
    /**
     * Parameters for findByEtablissementCriteria
     */
    export interface FindByCriteriaParams {
      language?: string;
      body?: SupplierCriteria;
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
      body?: SupplierDto;
    }
  }
  
  export { SupplierApiService }