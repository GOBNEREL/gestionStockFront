import { Component } from '@angular/core';
import { ArticleCriteria, ArticleDto } from 'src/gs-api/src/models';
import { ArticleService } from '../service/article.service';
import { ArticleSaveComponent } from '../article-save/article-save.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {
  article$: Observable<ArticleDto[] | []> | undefined;
  errorMsg = '';

  constructor(
    private router: Router,
    private articleService: ArticleService,
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private webStorageService: WebStorageService
  ){}

  searchForm = this.fb.group({
    name:[],
    price:[],
    status:[],
    classement:[true],
    nombreDeResultat: ['50'],
  });

  ngOnInit(): void {
    this.refresh();
  }
  refresh(): void {
    this.article$ = this.findAll();
    console.log(this.article$);
  }
  load(): void {
    this.article$ = this.findAll();
  }

  findAll(): Observable<ArticleDto[] | []> {
    return this.articleService.findAll(
      {
        language: this.webStorageService.getLanguage(),
        body: this.findForm()
      });
  }

  findForm(): ArticleCriteria {
    return {
      name: this.searchForm.value.name ?? undefined,
      price: this.searchForm.value.price ?? null,
      status: this.searchForm.value.status ?? undefined,
      classement: this.searchForm.value.classement ?? false,
    };
  }

  openModal(): void {
    const modalRef = this.ngbModal.open(ArticleSaveComponent, {size: 'lg', backdrop: 'static', animation: true});
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
