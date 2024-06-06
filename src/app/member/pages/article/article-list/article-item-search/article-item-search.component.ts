import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-article-item-search',
  templateUrl: './article-item-search.component.html',
  styleUrls: ['./article-item-search.component.scss']
})
export class ArticleItemSearchComponent {
  @Input() isclassement:boolean = true;
  @Input() isActif: boolean = true;
  @Input() isNombreDeResultat: boolean = true;
  @Output()
  searchArticleEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) {}

  searchForm = this.formBuilder.group({
    status: [],
    name:[],
    category:[],
    classement: [],
    nombreDeResultat: ['50']
  });
  refresh(): void {
    this.searchArticleEvent.emit(this.searchForm);
  }
}
