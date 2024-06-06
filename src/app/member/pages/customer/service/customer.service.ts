import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ArticleDto, CategoryDto, MessageNotification } from "src/gs-api/src/models";
import SaveParams = CustomerApiService.SaveParams;
import FindByCriteriaParams = CustomerApiService.FindByCriteriaParams;
import { ArticleApiService, CustomerApiService } from "src/gs-api/src/services";

@Injectable({
    providedIn: 'root'
  })
  export class CustomerService {
  
    constructor(
      private customerApiService : CustomerApiService
    ) { }
  
    save(body: SaveParams): Observable<MessageNotification> {
      console.log(body);
      return this.customerApiService.save(body);
    }
  
    findAll(body: FindByCriteriaParams): Observable<ArticleDto[]> {
      return this.customerApiService.findByCriteria(body);
    }
}