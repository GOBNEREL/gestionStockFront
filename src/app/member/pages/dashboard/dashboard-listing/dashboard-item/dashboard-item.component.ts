import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebStorageService } from 'src/app/core/auth/web-storage.service';
import { ToastManagerService } from 'src/app/shared/service/toast-manager.service';
import { StockDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent {
  @Input() stockDtos: StockDto[] = [];
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
    private webStorageService: WebStorageService
  ) { }

  trackBy(index: number, item: any): number {
    return item.id!;
  }

  createForm(type:StockDto): StockDto {
    return {
      ...type,
      status: !type.status
    }
  }
}
