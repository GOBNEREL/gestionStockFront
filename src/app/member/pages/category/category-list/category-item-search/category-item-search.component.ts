import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-category-item-search',
  templateUrl: './category-item-search.component.html',
  styleUrls: ['./category-item-search.component.scss']
})
export class CategoryItemSearchComponent {
  @Input() isclassement:boolean = true;
  @Input() isActif: boolean = true;
  @Input() isNombreDeResultat: boolean = true;
  @Output()
  searchCategoryEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) {}

  searchForm = this.formBuilder.group({
    status: [],
    name:[],
    classement: [],
    nombreDeResultat: ['50']
  });
  refresh(): void {
    this.searchCategoryEvent.emit(this.searchForm);
  }
}
