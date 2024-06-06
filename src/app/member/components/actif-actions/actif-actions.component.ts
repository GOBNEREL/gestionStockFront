import {Component, EventEmitter, Input, Output} from '@angular/core';
import Swal from "sweetalert2";
import {WebStorageService} from "../../../core/auth/web-storage.service";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-actif-actions',
  templateUrl: './actif-actions.component.html',
  styleUrls: ['./actif-actions.component.scss']
})
export class ActifActionsComponent {

  @Input() entity: string;
  @Input() isActif: boolean = true;
  @Input() isSeanceFTFclose: boolean = false;
  @Input() activation: boolean = false;
  @Input() isRappelLot : boolean = true;
  @Input() isClose: boolean = false;
  @Input() isValidated: boolean = false;
  @Input() isPerte: boolean = false;
  @Input() isInvantaireClose: boolean = false;
  @Input() isRetour: boolean = false;
  @Input() isReception: boolean = false;
  @Input() islogout: boolean = false;
  @Input() isdelete: boolean = false;
  @Input() isClotureItem: boolean = false;
  @Input() isInitialiser: boolean = false;
  @Input() israppel: boolean = false;
  @Input() readonly: boolean = false;
  @Input() message = '';
  @Input() value: string | undefined = '';

  @Output() newEvent = new EventEmitter();

  lang= '';

  constructor(
    private webStorageService: WebStorageService,
    private translateService: TranslateService,
    private router: Router,
  ){}

  btnIsActif(): void{
    this.newEvent.emit();
  }

  confirmBox() {
    this.lang = this.webStorageService.getLanguage();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'ms-3 btn button-color',
        cancelButton: 'me-3 btn btn-dark'
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
      title: 'en' === this.lang ? 'Are you sure ?' : 'Êtes-vous sûr ?',
      text: 'en' === this.lang ? 'You will change the status of ' + this.translateService.instant(this.message) + ' ' + this.value + ' !!!' : 'Vous allez changer le statut ' + this.translateService.instant(this.message) + ' ' + this.value + ' !!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'en' === this.lang ? 'Yes' : 'Oui',
      cancelButtonText: 'en' === this.lang ? 'No' : 'Non',
      reverseButtons: true,
      allowOutsideClick: false, // Disable clicking outside popup
      allowEscapeKey: false // Disable pressing escape key
    }).then((result) => {
      if (result.isConfirmed) {
        this.btnIsActif();
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
      }
    })
  }

  confirmCloseBoxExp() {
    this.lang = this.webStorageService.getLanguage();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'ms-3 btn button-color',
        cancelButton: 'me-3 btn btn-dark'
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
      title: 'en' === this.lang ? 'Are you sure ?' : 'Êtes-vous sûr ?',
      text: 'en' === this.lang ?  this.translateService.instant(this.message) + ' ' + this.value  + ' !!!' : this.translateService.instant(this.message) + ' ' + this.value  + ' !!!' ,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'en' === this.lang ? 'Yes' : 'Oui',
      cancelButtonText: 'en' === this.lang ? 'No' : 'Non',
      reverseButtons: true,
      allowOutsideClick: false, // Disable clicking outside popup
      allowEscapeKey: false // Disable pressing escape key
    }).then((result) => {
      if (result.isConfirmed) {
        this.btnIsActif();
        this.router.navigate(['ExpeditionsListComponent']);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
      }
    })
  }
  confirmCloseBoxInv() {
    this.lang = this.webStorageService.getLanguage();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'ms-3 btn button-color',
        cancelButton: 'me-3 btn btn-dark'
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
      title: 'en' === this.lang ? 'Are you sure ?' : 'Êtes-vous sûr ?',
      text: 'en' === this.lang ?  this.translateService.instant(this.message) + ' ' + this.value + ' !!!' : this.translateService.instant(this.message) + ' ' + this.value + ' !!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'en' === this.lang ? 'Yes' : 'Oui',
      cancelButtonText: 'en' === this.lang ? 'No' : 'Non',
      reverseButtons: true,
      allowOutsideClick: false, // Disable clicking outside popup
      allowEscapeKey: false // Disable pressing escape key
    }).then((result) => {
      if (result.isConfirmed) {
        this.btnIsActif();
        this.router.navigate(['InventaireListComponent']);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
      }
    })
  }


}
