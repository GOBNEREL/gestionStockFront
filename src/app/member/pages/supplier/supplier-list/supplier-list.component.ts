import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SupplierCriteria, SupplierDto } from 'src/gs-api/src/models';
import { SupplierSaveComponent } from '../supplier-save/supplier-save.component';
import { SupplierService } from '../service/supplier.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent {
  supplier$: Observable<SupplierDto[] | []> | undefined;
  errorMsg = '';

  constructor(
    private router: Router,
    private supplierService: SupplierService,
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
    this.supplier$ = this.findAll();
    console.log(this.supplier$);
  }
  load(): void {
    this.supplier$ = this.findAll();
  }

  findAll(): Observable<SupplierDto[] | []> {
    return this.supplierService.findAll(
      {
        language: this.webStorageService.getLanguage(),
        body: this.findForm()
      });
  }

  findForm(): SupplierCriteria {
    return {
      name: '',
      phoneNumber: '',
      classement: true,
    };
  }

  openModal(): void {
    const modalRef = this.ngbModal.open(SupplierSaveComponent, {size: 'lg', backdrop: 'static', animation: true});
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