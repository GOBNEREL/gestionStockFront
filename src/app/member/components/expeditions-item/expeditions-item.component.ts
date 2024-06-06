import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Expedition} from "../../../../gs-api/src/models/expedition";
import {ExpeditionDto} from "../../../../gs-api/src/models/expedition-dto";
import {Router} from "@angular/router";

import {ToastManagerService} from "../../../shared/service/toast-manager.service";
import {WebStorageService} from "../../../core/auth/web-storage.service";
import {JasperReportService} from "../../services/jasper-report/jasper-report.service";
import {ExpeditionService} from "../../pages/expeditions/service/expedition.service";


@Component({
  selector: 'app-expeditions-item',
  templateUrl: './expeditions-item.component.html',
  styleUrls: ['./expeditions-item.component.scss']
})
export class ExpeditionsItemComponent implements OnInit{

  @Input()
  expeditionsEntity: Expedition[] = [];
  gridListings = 1;

  @Output()
  updateResult = new EventEmitter();

  constructor(
    private ngbModal: NgbModal,
    private router: Router,
    private webStorageService: WebStorageService,
    private jasperReportService: JasperReportService,
    private expeditionService:ExpeditionService
  ) {}

  ngOnInit(): void {
  }

  trackBy(index: number, item: Expedition): number {
    return item.id ?? 0;
  }

  openDetails(expedition: ExpeditionDto) {
    this.router.navigate(['member/expeditions/details',expedition.id]).then(() => {})
  }

  updateExpedition(expedition: ExpeditionDto) {
    this.router.navigate(['member/expeditions/edit', expedition.id]).then(() => {})
  }

  printRapportExpedition(id: any) {
    this.jasperReportService.printRapportExpedition(id, false, this.webStorageService.getLanguage()).subscribe({
      next: response => {
        if (response.statut) {
          window.open(response.directorieLong, '_blank');
        } else {
          ToastManagerService.toastSuccess(response.message);
        }
      },
      error: err => {
        ToastManagerService.toastError(err.error.message);
      }
    });
  }

  isConfirm(expeditionDto: ExpeditionDto) {
    if (expeditionDto.cloturer !== true) {
      return 'rgba(246,174,184,0.36)';
    }
    return '#ffffff';
  }

  retourStock(expeditionDto: ExpeditionDto) {
    this.expeditionService.returnProduct({language: this.webStorageService.getLanguage(),body: expeditionDto})
      .subscribe({
        next: response => {
          ToastManagerService.toastSuccess(response.message);
          this.updateResult.emit('success');
        },
        error: err => {
          ToastManagerService.toastError(err.error.message);
        }
      });
  }

}
