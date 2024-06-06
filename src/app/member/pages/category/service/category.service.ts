import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryDto, MessageNotification } from "src/gs-api/src/models";
import SaveCategoryParams = CategoryApiService.SaveCategoryParams;
import FindByCategoryParams = CategoryApiService.FindByCategoryCriteriaParams;
import { CategoryApiService } from "src/gs-api/src/services";

@Injectable({
    providedIn: 'root'
  })
  export class CategoryService {
  
    constructor(
      private categoryApiService : CategoryApiService
    ) { }
  
    save(body: SaveCategoryParams): Observable<MessageNotification> {
      console.log(body);
      return this.categoryApiService.saveCategory(body);
    }
  
    findAll(body: FindByCategoryParams): Observable<CategoryDto[]> {
      return this.categoryApiService.findByCategoryCriteria(body);
    }
  }