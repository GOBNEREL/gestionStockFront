import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-user-item-search',
  templateUrl: './user-item-search.component.html',
  styleUrls: ['./user-item-search.component.scss']
})
export class UserItemSearchComponent {

  @Output()
  searchUserEvent = new EventEmitter();
  constructor(
    private fb: FormBuilder
  ) {}
  searchForm = this.fb.group({
    name: [],
    phoneNumber: [],
    email: [],
    type: [],
    login: [],
    order: [0],
    type_order: ['id'],
    resultMax: [50],
  });

  refresh(): void {
    this.searchUserEvent.emit(this.searchForm);
  }

}
