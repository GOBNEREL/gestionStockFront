import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ArticleDto, CategoryDto, MessageNotification } from "src/gs-api/src/models";
import SaveParams = SupplierApiService.SaveParams;
import FindByCriteriaParams = SupplierApiService.FindByCriteriaParams;
import { SupplierApiService } from "src/gs-api/src/services";

@Injectable({
    providedIn: 'root'
  })
  export class SupplierService {
  
    constructor(
      private supplierApiService : SupplierApiService
    ) { }
  
    save(body: SaveParams): Observable<MessageNotification> {
      console.log(body);
      return this.supplierApiService.save(body);
    }
  
    findAll(body: FindByCriteriaParams): Observable<ArticleDto[]> {
      return this.supplierApiService.findByCriteria(body);
    }
}