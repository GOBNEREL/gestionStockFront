import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StoragesDto} from "../../../../gs-api/src/models/storages-dto";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TranslateService} from "@ngx-translate/core";
import {ArticlesDetailComponent} from "../../pages/articles/articles-detail/articles-detail.component";

@Component({
  selector: 'app-articles-item',
  templateUrl: './articles-item.component.html',
  styleUrls: ['./articles-item.component.scss']
})
export class ArticlesItemComponent {

  quantifiable: string = '';
  actif: string = '';

  @Input()
  storagesDto: StoragesDto[] = [];

  @Output()
  updateResult = new EventEmitter();

  constructor(
    private ngbModal: NgbModal,
    private translateService: TranslateService
  ) {}

  trackBy(index: number, item: StoragesDto): number {
    return item.id ?? 0;
  }

  updateModal(storageDto: StoragesDto): void {

  }

  detailModal(storageDto: StoragesDto): void {
      const modalRef = this.ngbModal.open(ArticlesDetailComponent, {size: 'lg', backdrop: false});
      modalRef.componentInstance.storageDto = storageDto;
  }

  isQuantifiable(isQuantifiable: boolean | undefined | null) : string {
    if(isQuantifiable) {
      this.quantifiable = "Quantifiable";
    } else {
      this.quantifiable = "Non Quantifiable";
    }
    return this.quantifiable
  }

  isActif(isActif: boolean | undefined | null) : string {
    if(isActif) {
      this.actif = "OUI";
    } else {
      this.actif = "NON";
    }
    return this.actif;
  }
}
