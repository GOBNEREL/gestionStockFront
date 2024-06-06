import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-item-search',
  templateUrl: './customer-item-search.component.html',
  styleUrls: ['./customer-item-search.component.scss']
})
export class CustomerItemSearchComponent {
  @Input() isclassement:boolean = true;
  @Input() isActif: boolean = true;
  @Input() isNombreDeResultat: boolean = true;
  @Output()
  searchCustomerEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) {}

  searchForm = this.formBuilder.group({
    status: [],
    name:[],
    phoneNumber:[],
    classement: [],
    nombreDeResultat: ['50']
  });
  refresh(): void {
    this.searchCustomerEvent.emit(this.searchForm);
  }
}
