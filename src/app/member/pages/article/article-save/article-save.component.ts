import { Component } from '@angular/core';
import { ArticleDto, CategoryCriteria, CategoryDto } from 'src/gs-api/src/models';
import { ArticleService } from '../service/article.service';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { ToastManagerService } from 'src/app/shared/service/toast-manager.service';
import { CategoryService } from '../../category/service/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-save',
  templateUrl: './article-save.component.html',
  styleUrls: ['./article-save.component.scss']
})
export class ArticleSaveComponent {
  articleDto: ArticleDto = {};
  errorsMsg: Array<string> = [];
  isSaving = false;

  listCategoryFilter: Array<CategoryDto> = [];
  listCategory$: Array<CategoryDto> = [];
  categoryName? = '';

  articleForm = this.fb.group({
    name: ['', [Validators.required]],
    category: ['', [Validators.required]],
    price: [null, [Validators.required]],
    description: [''],
    status: [true]
  });

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private webStorageService: WebStorageService
  ) {
  }

  ngOnInit(): void {
    this.updateForm(this.articleDto);
    this.refreshCategory();
  }


  saveArticle(): void {
    this.isSaving = true;
    this.articleService.save({language: this.webStorageService.getLanguage(), body: this.creatForm()}).subscribe({
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


  creatForm(): ArticleDto {
    return {
      ...this.articleDto,
      name: this.articleForm.value.name ?? undefined,
      category: this.articleForm.value.category ?? undefined,
      price: this.articleForm.value.price ?? null,
      description: this.articleForm.value.description ?? undefined,
      status: this.articleForm.value.status ?? true
    }
  }

  updateForm(articleDto: ArticleDto): void {
    console.log(articleDto)
    this.articleForm.get(['name'])?.setValue(articleDto?.name);
    this.articleForm.get(['description'])?.setValue(articleDto?.description);
    this.articleForm.get(['category'])?.setValue(articleDto?.category);
    this.articleForm.get(['price'])?.setValue(articleDto?.price);
    this.articleForm.get(['status'])?.setValue(articleDto?.status);
  }


  cancle(): void {
    this.activeModal.dismiss('cancel');
  }


  exit() {
    this.activeModal.dismiss("cancel")
  }


  //*****************//
  //**Category***//
  //***************//
  findAllCategory(): Observable<CategoryDto[] | []> {
    return this.categoryService.findAll(
      {
        language: this.webStorageService.getLanguage(),
        body: this.findCategoryForm()
      }
    );
  }

  findCategoryForm(): CategoryCriteria {
    return {
      name:  '',
      status: true,
      classement: true,
    };
  }

  private refreshCategory() {
    this.findAllCategory().subscribe({next: (res) => {
        this.listCategory$ = res;
        console.log(this.listCategory$);
    }})
  }

  filterCategory(event: any) {
    if (event.target.value.length > 0) {
      this.listCategoryFilter = this.listCategory$.filter(category => {
        category.name?.includes(event.target.value)
      });
    }
    if (this.listCategoryFilter.length === 0) {
      this.categoryName = event.target.value;
      this.refreshCategory();
    }
    else {
      this.listCategory$ = this.listCategoryFilter;
    }
  }

  onClearableCategory() {
    this.categoryName = '';
    this.refreshCategory();
  }
}
