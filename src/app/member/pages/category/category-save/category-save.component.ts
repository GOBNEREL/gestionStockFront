import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { ToastManagerService } from 'src/app/shared/service/toast-manager.service';
import { CategoryDto } from 'src/gs-api/src/models';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-save',
  templateUrl: './category-save.component.html',
  styleUrls: ['./category-save.component.scss']
})
export class CategorySaveComponent {
  categoryDto: CategoryDto = {};
  errorsMsg: Array<string> = [];
  isSaving = false;

  categoryForm = this.fb.group({
    name: ['', [Validators.required]],
    description: [''],
    status: [true]
  });

  constructor(
    private categoryService: CategoryService,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private webStorageService: WebStorageService
  ) {
  }

  ngOnInit(): void {
    this.updateForm(this.categoryDto);
  }


  saveCategory(): void {
    this.isSaving = true;
    this.categoryService.save({language: this.webStorageService.getLanguage(), body: this.creatForm()}).subscribe({
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


  creatForm(): CategoryDto {
    return {
      ...this.categoryDto,
      name: this.categoryForm.value.name ?? undefined,
      description: this.categoryForm.value.description ?? undefined,
      status: this.categoryForm.value.status ?? true
    }
  }

  updateForm(categoryDto: CategoryDto): void {
    console.log(categoryDto)
    this.categoryForm.get(['name'])?.setValue(categoryDto?.name);
    this.categoryForm.get(['description'])?.setValue(categoryDto?.description);
    this.categoryForm.get(['status'])?.setValue(categoryDto?.status);
  }


  cancle(): void {
    this.activeModal.dismiss('cancel');
  }


  exit() {
    this.activeModal.dismiss("cancel")
  }
}
