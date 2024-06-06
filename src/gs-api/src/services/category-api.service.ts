import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MessageNotification } from '../models/message-notification';
import { CategoryDto } from '../models/category-dto';
import { CategoryCriteria } from '../models/category-criteria';

@Injectable({
    providedIn: 'root',
  })
  class CategoryApiService extends __BaseService {
    static readonly findByCategoryCriteriaPath = '/api/stockManagement/v1/category/findCategory';
    static readonly findCategoryWithCodePath = '/api/stockManagement/v1/category/findCategoryWithCode';
    static readonly findCategoryWithIdPath = '/api/stockManagement/v1/category/findCategoryWithId';
    static readonly saveCategoryPath = '/api/stockManagement/v1/category/saveCategory';
  
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
    findByCategoryCriteriaResponse(params: CategoryApiService.FindByCategoryCriteriaParams): __Observable<__StrictHttpResponse<Array<CategoryDto>>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;
      if (params.language != null) __params = __params.set('language', params.language.toString());
      __body = params.body;
      let req = new HttpRequest<any>(
        'POST',
        this.rootUrl + `/api/stockManagement/v1/category/findCategory`,
        __body,
        {
          headers: __headers,
          params: __params,
          responseType: 'json'
        });
  
      return this.http.request<any>(req).pipe(
        __filter(_r => _r instanceof HttpResponse),
        __map((_r) => {
          return _r as __StrictHttpResponse<Array<CategoryDto>>;
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
    findByCategoryCriteria(params: CategoryApiService.FindByCategoryCriteriaParams): __Observable<Array<CategoryDto>> {
      return this.findByCategoryCriteriaResponse(params).pipe(
        __map(_r => _r.body as Array<CategoryDto>)
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
    findCategoryWithCodeResponse(params: CategoryApiService.FindCategoryWithCodeParams): __Observable<__StrictHttpResponse<CategoryDto>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;
      if (params.code != null) __params = __params.set('code', params.code.toString());
      if (params.language != null) __params = __params.set('language', params.language.toString());
      let req = new HttpRequest<any>(
        'GET',
        this.rootUrl + `/api/stockManagement/v1/category/findCategoryWithCode`,
        __body,
        {
          headers: __headers,
          params: __params,
          responseType: 'json'
        });
  
      return this.http.request<any>(req).pipe(
        __filter(_r => _r instanceof HttpResponse),
        __map((_r) => {
          return _r as __StrictHttpResponse<CategoryDto>;
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
    findCategoryWithCode(params: CategoryApiService.FindCategoryWithCodeParams): __Observable<CategoryDto> {
      return this.findCategoryWithCodeResponse(params).pipe(
        __map(_r => _r.body as CategoryDto)
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
    findCategoryWithIdResponse(params: CategoryApiService.FindCategoryWithIdParams): __Observable<__StrictHttpResponse<CategoryDto>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;
      if (params.id != null) __params = __params.set('id', params.id.toString());
      if (params.language != null) __params = __params.set('language', params.language.toString());
      let req = new HttpRequest<any>(
        'GET',
        this.rootUrl + `/api/stockManagement/v1/category/findCategoryWithId`,
        __body,
        {
          headers: __headers,
          params: __params,
          responseType: 'json'
        });
  
      return this.http.request<any>(req).pipe(
        __filter(_r => _r instanceof HttpResponse),
        __map((_r) => {
          return _r as __StrictHttpResponse<CategoryDto>;
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
    findCategoryWithId(params: CategoryApiService.FindCategoryWithIdParams): __Observable<CategoryDto> {
      return this.findCategoryWithIdResponse(params).pipe(
        __map(_r => _r.body as CategoryDto)
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
    saveCategoryResponse(params: CategoryApiService.SaveCategoryParams): __Observable<__StrictHttpResponse<MessageNotification>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;
      if (params.language != null) __params = __params.set('language', params.language.toString());
      __body = params.body;
      let req = new HttpRequest<any>(
        'POST',
        this.rootUrl + `/api/stockManagement/v1/category/saveCategory`,
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
    saveCategory(params: CategoryApiService.SaveCategoryParams): __Observable<MessageNotification> {
      return this.saveCategoryResponse(params).pipe(
        __map(_r => _r.body as MessageNotification)
      );
    }
  }
  
  module CategoryApiService {
  
    /**
     * Parameters for findByEtablissementCriteria
     */
    export interface FindByCategoryCriteriaParams {
      language?: string;
      body?: CategoryCriteria;
    }
  
    /**
     * Parameters for findEtablissementWithCode
     */
    export interface FindCategoryWithCodeParams {
      code: string;
      language?: string;
    }
  
    /**
     * Parameters for findEtablissementWithId
     */
    export interface FindCategoryWithIdParams {
      id: number;
      language?: string;
    }
  
    /**
     * Parameters for saveEtablissement
     */
    export interface SaveCategoryParams {
      language?: string;
      body?: CategoryDto;
    }
  }
  
  export { CategoryApiService }