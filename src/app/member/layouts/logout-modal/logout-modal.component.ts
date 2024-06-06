import { Component } from '@angular/core';
import {AuthJwtService} from "../../../core/auth/auth-jwt.service";
import {Router} from "@angular/router";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss']
})
export class LogoutModalComponent {

  constructor(
    private authJwtService: AuthJwtService,
    private router: Router,
    private activeModal: NgbActiveModal
  ) {}

  logout(): void {
    this.authJwtService.logout();
    this.exit();
  }

  exit(): void {
    this.activeModal.close();
  }
}
