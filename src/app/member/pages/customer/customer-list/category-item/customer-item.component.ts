import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { ToastManagerService } from 'src/app/shared/service/toast-manager.service';
import { CustomerDto } from 'src/gs-api/src/models';
import { CustomerService } from '../../service/customer.service';
import { CustomerSaveComponent } from '../../customer-save/customer-save.component';
import { CustomerDetailsComponent } from '../../customer-details/customer-details.component';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class CustomerItemComponent {
  @Input() customerDtos: CustomerDto[] = [];
  @Output()
  searchCustomerEvent = new EventEmitter();

  @Output()
  updateResult = new EventEmitter();
  errorsMsg: Array<string> = [];

  gridListings = 1;
  isSaving = false;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private customerService: CustomerService,
    private webStorageService: WebStorageService
  ) { }

  updateModal(customerDto: CustomerDto): void {
    const modalRef = this.modalService.open(CustomerSaveComponent, {size: 'lg',  backdrop: 'static', animation: true});
    modalRef.componentInstance.customerDto = customerDto;
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.updateResult.emit('success');
      }
    });
  }

  detailModal(customerDto: CustomerDto): void {
    const modalRef = this.modalService.open(CustomerDetailsComponent, {size: 'lg',  backdrop: 'static', animation: true});
    modalRef.componentInstance.customerDto = customerDto;
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.updateResult.emit('success');
      }
    });
  }

  trackBy(index: number, item: any): number {
    return item.id!;
  }


  changeStatus(type:CustomerDto):void {
    this.isSaving = true;
    this.customerService.save({language: this.webStorageService.getLanguage(), body: this.createForm(type)}).subscribe({
      next: (res) => {
        ToastManagerService.toastSuccess(res.message);
        this.isSaving = false;
        window.location.reload();
      },
      error: (err) => {
        this.isSaving = false;
        this.errorsMsg = err.error?.errors;
        ToastManagerService.toastError(err.error.message);
      }
    })
  }
  createForm(type:CustomerDto): CustomerDto {
    return {
      ...type,
      status: !type.status
    }
  }
}
