import { Component } from '@angular/core';
import { CustomerOrderCriteria, CustomerOrderDto } from 'src/gs-api/src/models';
import { CustomerOrderSaveComponent } from '../customer-order-save/customer-order-save.component';
import { CustomerOrderService } from '../service/customer-order.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';

@Component({
  selector: 'app-customer-order-list',
  templateUrl: './customer-order-list.component.html',
  styleUrls: ['./customer-order-list.component.scss']
})
export class CustomerOrderListComponent {
  customerOrder$: Observable<CustomerOrderDto[] | []> | undefined;
  errorMsg = '';

  constructor(
    private router: Router,
    private customerOrderService: CustomerOrderService,
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private webStorageService: WebStorageService
  ){}

  searchForm = this.fb.group({
    customerName:[],
    status:[],
    totalPrice:[],
    classement:[true],
    nombreDeResultat: ['50'],
  });

  ngOnInit(): void {
    this.refresh();
  }
  refresh(): void {
    this.customerOrder$ = this.findAll();
    console.log(this.customerOrder$);
  }
  load(): void {
    this.customerOrder$ = this.findAll();
  }

  findAll(): Observable<CustomerOrderDto[] | []> {
    return this.customerOrderService.findAll(
      {
        language: this.webStorageService.getLanguage(),
        body: this.findForm()
      });
  }

  findForm(): CustomerOrderCriteria {
    return {
      customerName: this.searchForm.value.customerName ?? undefined,
      totalPrice: this.searchForm.value.totalPrice ?? null,
      status: this.searchForm.value.status ?? undefined,
      classement: this.searchForm.value.classement ?? false,
    };
  }

  openModal(): void {
    const modalRef = this.ngbModal.open(CustomerOrderSaveComponent, {size: 'lg', backdrop: 'static', animation: true});
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
