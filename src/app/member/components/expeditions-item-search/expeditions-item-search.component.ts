import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-expeditions-item-search',
  templateUrl: './expeditions-item-search.component.html',
  styleUrls: ['./expeditions-item-search.component.scss']
})
export class ExpeditionsItemSearchComponent {

  @Output()
  searchEventExp = new EventEmitter();

  constructor(
    private fb: FormBuilder,
  ){}

  searchForm = this.fb.group({
    libelle: [],
    agent: [],
    numeroExpedition: [],
    isClose: [''],
    order: [false],
    type_order: ['id'],
    resultMax: [50]
  });

  refresh(): void {
    this.searchEventExp.emit(this.searchForm);
  }

}
