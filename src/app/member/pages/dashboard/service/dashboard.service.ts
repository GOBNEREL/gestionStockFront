import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ArticleDto} from "src/gs-api/src/models";
import FindByCriteriaParams = StockApiService.FindByCriteriaParams;
import { StockApiService } from "src/gs-api/src/services/stock-api.service";

@Injectable({
    providedIn: 'root'
  })
  export class StockService {
  
    constructor(
      private stockApiService : StockApiService
    ) { }
  
    findAll(body: FindByCriteriaParams): Observable<ArticleDto[]> {
      return this.stockApiService.findByCriteria(body);
    }
  }