import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-articles-item-search',
  templateUrl: './articles-item-search.component.html',
  styleUrls: ['./articles-item-search.component.scss']
})
export class ArticlesItemSearchComponent {

  @Output()
  searchArticlesEvent = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {}

  searchArticleForm = this.fb.group({
    name: [],
    serialCode: [],
    barCode: [],
    idAgence: [],
    isActif: ['1'],
    // order:[0],
    limit:[],
  });

  refresh(): void {
    this.searchArticlesEvent.emit(this.searchArticleForm);
  }
}
