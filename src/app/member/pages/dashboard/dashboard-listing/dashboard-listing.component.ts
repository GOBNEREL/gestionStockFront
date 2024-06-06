import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { WebStorageService } from "src/app/core/auth/web-storage.service";
import { StockCriteria, StockDto } from "src/gs-api/src/models";
import { ArticleSaveComponent } from "../../article/article-save/article-save.component";
import { ArticleService } from "../../article/service/article.service";
import { StockService } from "../service/dashboard.service";


@Component({
  selector: 'app-dashboard-listing',
  templateUrl: './dashboard-listing.component.html',
  styleUrls: ['./dashboard-listing.component.scss']
})
export class DashboardListingComponent implements OnInit {
  stock$: Observable<StockDto[] | []> | undefined;
  errorMsg = '';

  constructor(
    private router: Router,
    private stockService: StockService,
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
    this.stock$ = this.findAll();
  }
  load(): void {
    this.stock$ = this.findAll();
  }

  findAll(): Observable<StockDto[] | []> {
    return this.stockService.findAll(
      {
        language: this.webStorageService.getLanguage(),
        body: this.findForm()
      });
  }

  findForm(): StockCriteria {
    return {
      name: this.searchForm.value.name ?? undefined,
      status: this.searchForm.value.status ?? undefined,
      classement: this.searchForm.value.classement ?? false,
    };
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


