import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-deliveries-item-search',
  templateUrl: './deliveries-item-search.component.html',
  styleUrls: ['./deliveries-item-search.component.scss']
})
export class DeliveriesItemSearchComponent {

  @Output()
  searchDeliveryEvent = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {}

  searchForm = this.fb.group({
    deliveryNumber: [],
    deliveryDateBefore: [],
    deliveryDateAfter: [],
    supplierPhone: [],
    isConfirm: [1],
    order: [],
    resultMax: ['50'],
  });

  refresh() {
    this.searchDeliveryEvent.emit(this.searchForm);

  }
}
