import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ArticleDto, CategoryDto, MessageNotification } from "src/gs-api/src/models";
import SaveParams = ArticleApiService.SaveParams;
import FindByCriteriaParams = ArticleApiService.FindByCriteriaParams;
import { ArticleApiService } from "src/gs-api/src/services";

@Injectable({
    providedIn: 'root'
  })
  export class ArticleService {
  
    constructor(
      private articleApiService : ArticleApiService
    ) { }
  
    save(body: SaveParams): Observable<MessageNotification> {
      console.log(body);
      return this.articleApiService.save(body);
    }
  
    findAll(body: FindByCriteriaParams): Observable<ArticleDto[]> {
      return this.articleApiService.findByCriteria(body);
    }
  }