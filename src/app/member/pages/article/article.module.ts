import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedMemberModule } from "../../shared-member/shared-member.module";
import { ArticleItemSearchComponent } from "./article-list/article-item-search/article-item-search.component";
import { ArticleItemComponent } from "./article-list/article-item/article-item.component";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleRoutingModule } from "./article-routing.module";
import { ArticleSaveComponent } from "./article-save/article-save.component";

@NgModule({
    declarations: [
        ArticleListComponent,
        ArticleItemComponent,
        ArticleItemSearchComponent,
        ArticleSaveComponent
    ],
      imports: [
          CommonModule,
          ArticleRoutingModule,
          SharedMemberModule
      ]
  })
  export class ArticleModule { }