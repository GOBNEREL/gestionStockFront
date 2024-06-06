import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { CategoryService } from '../service/category.service';
import { CategoryCriteria, CategoryDto } from 'src/gs-api/src/models';
import { CategorySaveComponent } from '../category-save/category-save.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit{
  category$: Observable<CategoryDto[] | []> | undefined;
  errorMsg = '';

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private webStorageService: WebStorageService
  ){}

  searchForm = this.fb.group({
    name:[],
    status:[],
    classement:[true],
    nombreDeResultat: ['50'],
  });

  ngOnInit(): void {
    this.refresh();
  }
  refresh(): void {
    this.category$ = this.findAll();
    console.log(this.category$);
  }
  load(): void {
    this.category$ = this.findAll();
  }

  findAll(): Observable<CategoryDto[] | []> {
    return this.categoryService.findAll(
      {
        language: this.webStorageService.getLanguage(),
        body: this.findForm()
      });
  }

  findForm(): CategoryCriteria {
    return {
      name: this.searchForm.value.name ?? undefined,
      status: this.searchForm.value.status ?? undefined,
      classement: this.searchForm.value.classement ?? false,
    };
  }

  openModal(): void {
    const modalRef = this.ngbModal.open(CategorySaveComponent, {size: 'lg', backdrop: 'static', animation: true});
    modalRef.closed.subscribe((res) => {
      if('success-category' === res) {
        this.load();
      }
    })
  }
  handleSearch(event: any): void {
    this.searchForm = event;
    this.load();
  }

  handleUpdate(event: any): void {
    if(event === 'success-etablissement') {
      this.load();
    } else {
      this.errorMsg = event;
    }
  }
}
