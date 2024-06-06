import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-supplier-order-item-search',
  templateUrl: './supplier-order-item-search.component.html',
  styleUrls: ['./supplier-order-item-search.component.scss']
})
export class SupplierOrderItemSearchComponent {
  @Input() isclassement:boolean = true;
  @Input() isActif: boolean = true;
  @Input() isNombreDeResultat: boolean = true;
  @Output()
  searchSupplierOrderEvent = new EventEmitter();

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
    this.searchSupplierOrderEvent.emit(this.searchForm);
  }
}
