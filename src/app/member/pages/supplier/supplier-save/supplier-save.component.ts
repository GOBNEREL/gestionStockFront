import { Component } from '@angular/core';
import { SupplierDto } from 'src/gs-api/src/models';
import { SupplierService } from '../service/supplier.service';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { ToastManagerService } from 'src/app/shared/service/toast-manager.service';

@Component({
  selector: 'app-supplier-save',
  templateUrl: './supplier-save.component.html',
  styleUrls: ['./supplier-save.component.scss']
})
export class SupplierSaveComponent {
  supplierDto: SupplierDto = {};
  errorsMsg: Array<string> = [];
  isSaving = false;

  supplierForm = this.fb.group({
    name: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    description: ['', [Validators.required]],
    status: [true]
  });

  constructor(
    private supplierService: SupplierService,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private webStorageService: WebStorageService
  ) {
  }

  ngOnInit(): void {
    this.updateForm(this.supplierDto);
  }


  saveSupplier(): void {
    this.isSaving = true;
    this.supplierService.save({language: this.webStorageService.getLanguage(), body: this.creatForm()}).subscribe({
      next: (res) => {
        this.activeModal.close('');
        ToastManagerService.toastSuccess(res.message);
        this.isSaving = false;
        window.location.reload();
      },
      error: (err) => {
        this.isSaving = false;
        this.errorsMsg = err.error?.errors;
        ToastManagerService.toastError(err.error?.message);
      }
    })
  }


  creatForm(): SupplierDto {
    return {
      ...this.supplierDto,
      name: this.supplierForm.value.name ?? undefined,
      phoneNumber: this.supplierForm.value.phoneNumber ?? undefined,
      description: this.supplierForm.value.description ?? undefined,
      status: this.supplierForm.value.status ?? true
    }
  }

  updateForm(supplierDto: SupplierDto): void {
    console.log(supplierDto)
    this.supplierForm.get(['name'])?.setValue(supplierDto?.name);
    this.supplierForm.get(['phoneNumber'])?.setValue(supplierDto?.phoneNumber);
    this.supplierForm.get(['description'])?.setValue(supplierDto?.description);
    this.supplierForm.get(['status'])?.setValue(supplierDto?.status);
  }


  cancle(): void {
    this.activeModal.dismiss('cancel');
  }


  exit() {
    this.activeModal.dismiss("cancel")
  }
}
