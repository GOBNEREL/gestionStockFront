import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-order-item-search',
  templateUrl: './customer-order-item-search.component.html',
  styleUrls: ['./customer-order-item-search.component.scss']
})
export class CustomerOrderItemSearchComponent {
  @Input() isclassement:boolean = true;
  @Input() isActif: boolean = true;
  @Input() isNombreDeResultat: boolean = true;
  @Output()
  searchCustomerOrderEvent = new EventEmitter();

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
    this.searchCustomerOrderEvent.emit(this.searchForm);
  }
}
