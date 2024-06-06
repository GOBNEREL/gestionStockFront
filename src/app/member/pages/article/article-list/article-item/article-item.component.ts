import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticleDto } from 'src/gs-api/src/models';
import { ArticleSaveComponent } from '../../article-save/article-save.component';
import { ArticleService } from '../../service/article.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { ToastManagerService } from 'src/app/shared/service/toast-manager.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent {
  @Input() articleDtos: ArticleDto[] = [];
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
    private articleService: ArticleService,
    private webStorageService: WebStorageService
  ) { }

  updateModal(articleDto: ArticleDto): void {
    const modalRef = this.modalService.open(ArticleSaveComponent, {size: 'lg',  backdrop: 'static', animation: true});
    modalRef.componentInstance.articleDto = articleDto;
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.updateResult.emit('success');
      }
    });
  }

  trackBy(index: number, item: any): number {
    return item.id!;
  }


  changeStatus(type:ArticleDto):void {
    this.isSaving = true;
    this.articleService.save({language: this.webStorageService.getLanguage(), body: this.createForm(type)}).subscribe({
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
  createForm(type:ArticleDto): ArticleDto {
    return {
      ...type,
      status: !type.status
    }
  }
}
