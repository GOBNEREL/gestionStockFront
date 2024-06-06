import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-confirmation-box',
  templateUrl: './confirmation-box.component.html',
  styleUrls: ['./confirmation-box.component.scss']
})
export class ConfirmationBoxComponent {
  message = '';
  text: string[] = [];

  constructor(
    private activeModal: NgbActiveModal,
  ) {
  }


  cancle(): void {
    this.activeModal.dismiss('cancel');
  }

  save() {
    this.activeModal.close('success-lot');
  }
}
