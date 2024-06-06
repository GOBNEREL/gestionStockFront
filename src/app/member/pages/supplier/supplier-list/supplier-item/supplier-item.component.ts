import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SupplierDto } from 'src/gs-api/src/models';
import { SupplierSaveComponent } from '../../supplier-save/supplier-save.component';
import { SupplierService } from '../../service/supplier.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { ToastManagerService } from 'src/app/shared/service/toast-manager.service';
import { SupplierDetailsComponent } from '../../supplier-details/supplier-details.component';

@Component({
  selector: 'app-supplier-item',
  templateUrl: './supplier-item.component.html',
  styleUrls: ['./supplier-item.component.scss']
})
export class SupplierItemComponent {
  @Input() supplierDtos: SupplierDto[] = [];
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
    private supplierSrvice: SupplierService,
    private webStorageService: WebStorageService
  ) { }

  updateModal(supplierDto: SupplierDto): void {
    const modalRef = this.modalService.open(SupplierSaveComponent, {size: 'lg',  backdrop: 'static', animation: true});
    modalRef.componentInstance.supplierDto = supplierDto;
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.updateResult.emit('success');
      }
    });
  }

  detailModal(supplierDto: SupplierDto): void {
    const modalRef = this.modalService.open(SupplierDetailsComponent, {size: 'lg',  backdrop: 'static', animation: true});
    modalRef.componentInstance.supplierDto = supplierDto;
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.updateResult.emit('success');
      }
    });
  }

  trackBy(index: number, item: any): number {
    return item.id!;
  }


  changeStatus(type:SupplierDto):void {
    this.isSaving = true;
    this.supplierSrvice.save({language: this.webStorageService.getLanguage(), body: this.createForm(type)}).subscribe({
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
  createForm(type:SupplierDto): SupplierDto {
    return {
      ...type,
      status: !type.status
    }
  }
}
