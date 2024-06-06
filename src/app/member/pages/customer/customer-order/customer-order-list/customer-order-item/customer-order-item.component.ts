import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerOrderDto } from 'src/gs-api/src/models';
import { CustomerOrderSaveComponent } from '../../customer-order-save/customer-order-save.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { ToastManagerService } from 'src/app/shared/service/toast-manager.service';
import { CustomerOrderService } from '../../service/customer-order.service';

@Component({
  selector: 'app-customer-order-item',
  templateUrl: './customer-order-item.component.html',
  styleUrls: ['./customer-order-item.component.scss']
})
export class CustomerOrderItemComponent {
  @Input() customerOrderDtos: CustomerOrderDto[] = [];
  @Output()
  searchSupplierOrderEvent = new EventEmitter();

  @Output()
  updateResult = new EventEmitter();
  errorsMsg: Array<string> = [];

  gridListings = 1;
  isSaving = false;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private customerOrderService: CustomerOrderService,
    private webStorageService: WebStorageService
  ) { }

  updateModal(customerOrderDto: CustomerOrderDto): void {
    const modalRef = this.modalService.open(CustomerOrderSaveComponent, {size: 'lg',  backdrop: 'static', animation: true});
    modalRef.componentInstance.customerOrderDto = customerOrderDto;
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.updateResult.emit('success');
      }
    });
  }

  trackBy(index: number, item: any): number {
    return item.id!;
  }


  changeStatus(type:CustomerOrderDto):void {
    this.isSaving = true;
    this.customerOrderService.save({language: this.webStorageService.getLanguage(), body: this.createForm(type)}).subscribe({
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
  createForm(type:CustomerOrderDto): CustomerOrderDto {
    return {
      ...type,
      status: !type.status
    }
  }
}
