import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedMemberModule } from "../../shared-member/shared-member.module";
import { CategoryRoutingModule } from "./category-routing.module";
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryItemComponent } from './category-list/category-item/category-item.component';
import { CategoryItemSearchComponent } from './category-list/category-item-search/category-item-search.component';
import { CategorySaveComponent } from './category-save/category-save.component';

@NgModule({
    declarations: [
  
    
    CategoryListComponent,
             CategoryItemComponent,
             CategoryItemSearchComponent,
             CategorySaveComponent
  ],
      imports: [
          CommonModule,
          CategoryRoutingModule,
          SharedMemberModule
      ]
  })
  export class CategoryModule { }