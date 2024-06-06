import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SupplierOrderSaveComponent } from '../../supplier-order-save/supplier-order-save.component';
import { SupplierOrderDto } from 'src/gs-api/src/models';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { ToastManagerService } from 'src/app/shared/service/toast-manager.service';
import { SupplierOrderService } from '../../service/supplier-order.service';

@Component({
  selector: 'app-supplier-order-item',
  templateUrl: './supplier-order-item.component.html',
  styleUrls: ['./supplier-order-item.component.scss']
})
export class SupplierOrderItemComponent {
  @Input() supplierOrderDtos: SupplierOrderDto[] = [];
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
    private supplierOrderService: SupplierOrderService,
    private webStorageService: WebStorageService
  ) { }

  updateModal(supplierOrderDto: SupplierOrderDto): void {
    const modalRef = this.modalService.open(SupplierOrderSaveComponent, {size: 'lg',  backdrop: 'static', animation: true});
    modalRef.componentInstance.supplierOrderDto = supplierOrderDto;
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.updateResult.emit('success');
      }
    });
  }

  trackBy(index: number, item: any): number {
    return item.id!;
  }


  changeStatus(type:SupplierOrderDto):void {
    this.isSaving = true;
    this.supplierOrderService.save({language: this.webStorageService.getLanguage(), body: this.createForm(type)}).subscribe({
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
  createForm(type:SupplierOrderDto): SupplierOrderDto {
    return {
      ...type,
      status: !type.status
    }
  }
}
