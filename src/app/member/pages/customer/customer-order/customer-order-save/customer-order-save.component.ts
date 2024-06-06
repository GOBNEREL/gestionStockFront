import { Component } from '@angular/core';
import { ArticleCriteria, ArticleDto, CustomerCriteria, CustomerDto, CustomerOrderDto } from 'src/gs-api/src/models';
import { CustomerService } from '../../service/customer.service';
import { CustomerOrderService } from '../service/customer-order.service';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { ToastManagerService } from 'src/app/shared/service/toast-manager.service';
import { ArticleService } from '../../../article/service/article.service';

@Component({
  selector: 'app-customer-order-save',
  templateUrl: './customer-order-save.component.html',
  styleUrls: ['./customer-order-save.component.scss']
})
export class CustomerOrderSaveComponent {
  customerOrderDto: CustomerOrderDto = {};
  errorsMsg: Array<string> = [];
  isSaving = false;

  listCustomerFilter: Array<CustomerDto> = [];
  listCustomer$: Array<CustomerDto> = [];
  customerName? = '';

  listArticleFilter: Array<ArticleDto> = [];
  listArticle$: Array<ArticleDto> = [];
  articleName? = '';

  customerForm = this.fb.group({
    customerName: ['', [Validators.required]],
    article: ['', [Validators.required]],
    quantity: [null, [Validators.required]],
    unitPrice: [null, [Validators.required]],
    commandDate: ['', [Validators.required]],
    status: [true]
  });

  constructor(
    private customerOrderService: CustomerOrderService,
    private customerService: CustomerService,
    private articleService: ArticleService,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private webStorageService: WebStorageService
  ) {
  }

  ngOnInit(): void {
    this.updateForm(this.customerOrderDto);
    this.refreshCustomer();
    this.refreshArticle();
  }


  saveCustomerOrder(): void {
    this.isSaving = true;
    this.customerOrderService.save({language: this.webStorageService.getLanguage(), body: this.creatForm()}).subscribe({
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


  creatForm(): CustomerOrderDto {
    return {
      ...this.customerOrderDto,
      customerName: this.customerForm.value.customerName ?? undefined,
      article: this.customerForm.value.article ?? undefined,
      quantity: this.customerForm.value.quantity ?? undefined,
      unitPrice: this.customerForm.value.unitPrice ?? undefined,
      commandDate: this.customerForm.value.commandDate ?? undefined,
      status: this.customerForm.value.status ?? true
    }
  }

  updateForm(customerOrderDto: CustomerOrderDto): void {
    console.log(customerOrderDto)
    this.customerForm.get(['customerName'])?.setValue(customerOrderDto?.customerName);
    this.customerForm.get(['article'])?.setValue(customerOrderDto?.article);
    this.customerForm.get(['quantity'])?.setValue(customerOrderDto?.quantity);
    this.customerForm.get(['unitPrice'])?.setValue(customerOrderDto?.unitPrice);
    this.customerForm.get(['status'])?.setValue(customerOrderDto?.status);
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
  findAllCustomer(): Observable<CustomerDto[] | []> {
    return this.customerService.findAll(
      {
        language: this.webStorageService.getLanguage(),
        body: this.findCustomerForm()
      }
    );
  }

  findCustomerForm(): CustomerCriteria {
    return {
      name:  '',
      status: true,
      classement: true,
    };
  }

  private refreshCustomer() {
    this.findAllCustomer().subscribe({next: (res) => {
        this.listCustomer$ = res;
        console.log(this.listCustomer$);
    }})
  }

  filterCustomer(event: any) {
    if (event.target.value.length > 0) {
      this.listCustomerFilter = this.listCustomer$.filter(customer => {
        customer.name?.includes(event.target.value)
      });
    }
    if (this.listCustomerFilter.length === 0) {
      this.customerName = event.target.value;
      this.refreshCustomer();
    }
    else {
      this.listCustomer$ = this.listCustomerFilter;
    }
  }

  onClearableCustomer() {
    this.customerName = '';
    this.refreshCustomer();
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
