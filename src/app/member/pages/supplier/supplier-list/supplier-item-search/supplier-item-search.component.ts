import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-supplier-item-search',
  templateUrl: './supplier-item-search.component.html',
  styleUrls: ['./supplier-item-search.component.scss']
})
export class SupplierItemSearchComponent {
  @Input() isclassement:boolean = true;
  @Input() isActif: boolean = true;
  @Input() isNombreDeResultat: boolean = true;
  @Output()
  searchSupplierEvent = new EventEmitter();

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
    this.searchSupplierEvent.emit(this.searchForm);
  }
}
