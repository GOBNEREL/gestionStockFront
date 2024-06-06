import { Component } from '@angular/core';
import { SupplierOrderSaveComponent } from '../supplier-order-save/supplier-order-save.component';
import { SupplierOrderCriteria, SupplierOrderDto } from 'src/gs-api/src/models';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { SupplierOrderService } from '../service/supplier-order.service';

@Component({
  selector: 'app-supplier-order-list',
  templateUrl: './supplier-order-list.component.html',
  styleUrls: ['./supplier-order-list.component.scss']
})
export class SupplierOrderListComponent {
  supplierOrder$: Observable<SupplierOrderDto[] | []> | undefined;
  errorMsg = '';

  constructor(
    private router: Router,
    private supplierOrderService: SupplierOrderService,
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private webStorageService: WebStorageService
  ){}

  searchForm = this.fb.group({
    supplierName:[],
    status:[],
    totalPrice:[],
    classement:[true],
    nombreDeResultat: ['50'],
  });

  ngOnInit(): void {
    this.refresh();
  }
  refresh(): void {
    this.supplierOrder$ = this.findAll();
    console.log(this.supplierOrder$);
  }
  load(): void {
    this.supplierOrder$ = this.findAll();
  }

  findAll(): Observable<SupplierOrderDto[] | []> {
    return this.supplierOrderService.findAll(
      {
        language: this.webStorageService.getLanguage(),
        body: this.findForm()
      });
  }

  findForm(): SupplierOrderCriteria {
    return {
      supplierName: this.searchForm.value.supplierName ?? undefined,
      totalPrice: this.searchForm.value.totalPrice ?? null,
      status: this.searchForm.value.status ?? undefined,
      classement: this.searchForm.value.classement ?? false,
    };
  }

  openModal(): void {
    const modalRef = this.ngbModal.open(SupplierOrderSaveComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.load();
      }
    })
  }
  handleSearch(event: any): void {
    this.searchForm = event;
    this.load();
  }

  handleUpdate(event: any): void {
    if(event === 'success') {
      this.load();
    } else {
      this.errorMsg = event;
    }
  }
}
