import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {UserDto} from "../../../../../gs-api/src/models/user-dto";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  userDto: UserDto = {};

  constructor(
    private activeModal: NgbActiveModal
  ) {}

  exit(): void {
    this.activeModal.close();
  }

}
