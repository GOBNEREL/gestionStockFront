import { Component } from '@angular/core';
import { CustomerCriteria, CustomerDto } from 'src/gs-api/src/models';
import { CustomerSaveComponent } from '../customer-save/customer-save.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { CategoryService } from '../../category/service/category.service';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  customer$: Observable<CustomerDto[] | []> | undefined;
  errorMsg = '';

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private webStorageService: WebStorageService
  ){}

  searchForm = this.fb.group({
    name:[],
    phoneNumber:[],
    status:[],
    classement:[true],
    nombreDeResultat: ['50'],
  });

  ngOnInit(): void {
    this.refresh();
  }
  refresh(): void {
    this.customer$ = this.findAll();
    console.log(this.customer$);
  }
  load(): void {
    this.customer$ = this.findAll();
  }

  findAll(): Observable<CustomerDto[] | []> {
    return this.customerService.findAll(
      {
        language: this.webStorageService.getLanguage(),
        body: this.findForm()
      });
  }

  findForm(): CustomerCriteria {
    return {
      name: '',
      phoneNumber: '',
      classement: true,
    };
  }

  openModal(): void {
    const modalRef = this.ngbModal.open(CustomerSaveComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success' === res) {
        this.load();
      }
    })
  }
  handleSearch(event: any): void {
    this.searchForm = event;
    this.load();
  }

  handleUpdate(event: any): void {
    if(event === 'success') {
      this.load();
    } else {
      this.errorMsg = event;
    }
  }
}
