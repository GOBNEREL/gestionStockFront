import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { ToastManagerService } from 'src/app/shared/service/toast-manager.service';
import { CategoryDto } from 'src/gs-api/src/models';
import { CategoryService } from '../../service/category.service';
import { CategorySaveComponent } from '../../category-save/category-save.component';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent {
  @Input() categoryDtos: CategoryDto[] = [];
  @Output()
  searchCategoryEvent = new EventEmitter();

  @Output()
  updateResult = new EventEmitter();
  errorsMsg: Array<string> = [];

  gridListings = 1;
  isSaving = false;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private categoryService: CategoryService,
    private webStorageService: WebStorageService
  ) { }

  updateModal(categoryDto: CategoryDto): void {
    const modalRef = this.modalService.open(CategorySaveComponent, {size: 'lg',  backdrop: 'static', animation: true});
    modalRef.componentInstance.categoryDto = categoryDto;
    modalRef.closed.subscribe((res) => {
      if('success-category' === res) {
        this.updateResult.emit('success-category');
      }
    });
  }

  trackBy(index: number, item: any): number {
    return item.id!;
  }


  changeStatus(type:CategoryDto):void {
    this.isSaving = true;
    this.categoryService.save({language: this.webStorageService.getLanguage(), body: this.createForm(type)}).subscribe({
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
  createForm(type:CategoryDto): CategoryDto {
    return {
      ...type,
      status: !type.status
    }
  }
}
