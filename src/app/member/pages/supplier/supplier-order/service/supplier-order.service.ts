import { MessageNotification, SupplierOrderDto } from "src/gs-api/src/models";
import SaveParams = SupplierOrderApiService.SaveParams;
import FindByCriteriaParams = SupplierOrderApiService.FindByCriteriaParams;
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SupplierOrderApiService } from "src/gs-api/src/services";

@Injectable({
    providedIn: 'root'
  })
  export class SupplierOrderService {
  
    constructor(
      private supplierOrderApiService : SupplierOrderApiService
    ) { }
  
    save(body: SaveParams): Observable<MessageNotification> {
      console.log(body);
      return this.supplierOrderApiService.save(body);
    }
  
    findAll(body: FindByCriteriaParams): Observable<SupplierOrderDto[]> {
      return this.supplierOrderApiService.findByCriteria(body);
    }
  }