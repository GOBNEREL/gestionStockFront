import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { ToastManagerService } from 'src/app/shared/service/toast-manager.service';
import { ArticleCriteria, ArticleDto, SupplierCriteria, SupplierDto, SupplierOrderDto } from 'src/gs-api/src/models';
import { SupplierService } from '../../service/supplier.service';
import { SupplierOrderService } from '../service/supplier-order.service';
import { ArticleService } from '../../../article/service/article.service';

@Component({
  selector: 'app-supplier-order-save',
  templateUrl: './supplier-order-save.component.html',
  styleUrls: ['./supplier-order-save.component.scss']
})
export class SupplierOrderSaveComponent {
  supplierOrderDto: SupplierOrderDto = {};
  errorsMsg: Array<string> = [];
  isSaving = false;

  listSupplierFilter: Array<SupplierDto> = [];
  listSupplier$: Array<SupplierDto> = [];
  supplierName? = '';

  listArticleFilter: Array<ArticleDto> = [];
  listArticle$: Array<ArticleDto> = [];
  articleName? = '';

  supplierForm = this.fb.group({
    supplierName: ['', [Validators.required]],
    article: ['', [Validators.required]],
    quantity: [null, [Validators.required]],
    unitPrice: [null, [Validators.required]],
    commandDate: ['', [Validators.required]],
    status: [true]
  });

  constructor(
    private supplierOrderService: SupplierOrderService,
    private supplierService: SupplierService,
    private articleService: ArticleService,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private webStorageService: WebStorageService
  ) {
  }

  ngOnInit(): void {
    this.updateForm(this.supplierOrderDto);
    this.refreshSupplier();
    this.refreshArticle();
  }


  saveSupplierOrder(): void {
    this.isSaving = true;
    this.supplierOrderService.save({language: this.webStorageService.getLanguage(), body: this.creatForm()}).subscribe({
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


  creatForm(): SupplierOrderDto {
    return {
      ...this.supplierOrderDto,
      supplierName: this.supplierForm.value.supplierName ?? undefined,
      article: this.supplierForm.value.article ?? undefined,
      quantity: this.supplierForm.value.quantity ?? undefined,
      unitPrice: this.supplierForm.value.unitPrice ?? undefined,
      commandDate: this.supplierForm.value.commandDate ?? undefined,
      status: this.supplierForm.value.status ?? true
    }
  }

  updateForm(supplierOrderDto: SupplierOrderDto): void {
    console.log(supplierOrderDto)
    this.supplierForm.get(['supplierName'])?.setValue(supplierOrderDto?.supplierName);
    this.supplierForm.get(['article'])?.setValue(supplierOrderDto?.article);
    this.supplierForm.get(['quantity'])?.setValue(supplierOrderDto?.quantity);
    this.supplierForm.get(['unitPrice'])?.setValue(supplierOrderDto?.unitPrice);
    this.supplierForm.get(['status'])?.setValue(supplierOrderDto?.status);
  }


  cancle(): void {
    this.activeModal.dismiss('cancel');
  }


  exit() {
    this.activeModal.dismiss("cancel")
  }


  //*****************//
  //***Supplier*****//
  //***************//
  findAllSupplier(): Observable<SupplierDto[] | []> {
    return this.supplierService.findAll(
      {
        language: this.webStorageService.getLanguage(),
        body: this.findSupplierForm()
      }
    );
  }

  findSupplierForm(): SupplierCriteria {
    return {
      name:  '',
      status: true,
      classement: true,
    };
  }

  private refreshSupplier() {
    this.findAllSupplier().subscribe({next: (res) => {
        this.listSupplier$ = res;
        console.log(this.listSupplier$);
    }})
  }

  filterSupplier(event: any) {
    if (event.target.value.length > 0) {
      this.listSupplierFilter = this.listSupplier$.filter(category => {
        category.name?.includes(event.target.value)
      });
    }
    if (this.listSupplierFilter.length === 0) {
      this.supplierName = event.target.value;
      this.refreshSupplier();
    }
    else {
      this.listSupplier$ = this.listSupplierFilter;
    }
  }

  onClearableSupplier() {
    this.supplierName = '';
    this.refreshSupplier();
  }


    //*****************//
  //***Article*****//
  //***************//
  findAllArticle(): Observable<ArticleDto[] | []> {
    return this.articleService.findAll(
      {
        language: this.webStorageService.getLanguage(),
        body: this.findArticleForm()
      }
    );
  }

  findArticleForm(): ArticleCriteria {
    return {
      name:  '',
      status: true,
      classement: true,
    };
  }

  private refreshArticle() {
    this.findAllArticle().subscribe({next: (res) => {
        this.listArticle$ = res;
        console.log(this.listArticle$);
    }})
  }

  filterArticle(event: any) {
    if (event.target.value.length > 0) {
      this.listArticleFilter = this.listArticle$.filter(category => {
        category.name?.includes(event.target.value)
      });
    }
    if (this.listArticleFilter.length === 0) {
      this.articleName = event.target.value;
      this.refreshArticle();
    }
    else {
      this.listArticle$ = this.listArticleFilter;
    }
  }

  onClearableArticle() {
    this.articleName = '';
    this.refreshArticle();
  }
}
