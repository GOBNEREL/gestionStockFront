import SaveParams = CustomerOrderApiService.SaveParams;
import FindByCriteriaParams = CustomerOrderApiService.FindByCriteriaParams;
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MessageNotification, SupplierOrderDto } from "src/gs-api/src/models";
import { CustomerOrderApiService, SupplierOrderApiService } from "src/gs-api/src/services";

@Injectable({
    providedIn: 'root'
  })
  export class CustomerOrderService {
  
    constructor(
      private customerOrderApiService : CustomerOrderApiService
    ) { }
  
    save(body: SaveParams): Observable<MessageNotification> {
      console.log(body);
      return this.customerOrderApiService.save(body);
    }
  
    findAll(body: FindByCriteriaParams): Observable<SupplierOrderDto[]> {
      return this.customerOrderApiService.findByCriteria(body);
    }
  }