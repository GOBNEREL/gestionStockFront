import { Component } from '@angular/core';
import { CustomerDto } from 'src/gs-api/src/models';
import { CustomerService } from '../service/customer.service';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { ToastManagerService } from 'src/app/shared/service/toast-manager.service';

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.scss']
})
export class CustomerSaveComponent {
  customerDto: CustomerDto = {};
  errorsMsg: Array<string> = [];
  isSaving = false;

  customerForm = this.fb.group({
    name: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    status: [true]
  });

  constructor(
    private customerService: CustomerService,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private webStorageService: WebStorageService
  ) {
  }

  ngOnInit(): void {
    this.updateForm(this.customerDto);
  }


  saveCustomer(): void {
    this.isSaving = true;
    this.customerService.save({language: this.webStorageService.getLanguage(), body: this.creatForm()}).subscribe({
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


  creatForm(): CustomerDto {
    return {
      ...this.customerDto,
      name: this.customerForm.value.name ?? undefined,
      phoneNumber: this.customerForm.value.phoneNumber ?? undefined,
      status: this.customerForm.value.status ?? true
    }
  }

  updateForm(customerDto: CustomerDto): void {
    console.log(customerDto)
    this.customerForm.get(['name'])?.setValue(customerDto?.name);
    this.customerForm.get(['phoneNumber'])?.setValue(customerDto?.phoneNumber);
    this.customerForm.get(['status'])?.setValue(customerDto?.status);
  }


  cancle(): void {
    this.activeModal.dismiss('cancel');
  }


  exit() {
    this.activeModal.dismiss("cancel")
  }
}
