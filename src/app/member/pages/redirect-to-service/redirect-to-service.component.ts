import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "../../../core/auth/account.service";
import {Subscription} from "rxjs";
import {WebStorageService} from "../../../core/auth/web-storage.service";
import { UserDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-redirect-to-service',
  templateUrl: './redirect-to-service.component.html',
  styleUrls: ['./redirect-to-service.component.scss']
})
export class RedirectToServiceComponent {
  account: UserDto | null = {};
  authSubscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private webStorageService: WebStorageService,
    private accountService: AccountService,
  ) {
  }

  ngOnInit(): void {
    this.webStorageService.clearService();
    this.authSubscription.add(this.accountService.getAuthenticationState().subscribe(account => {
      this.account = account;
    }));
  }

  moveToGazDashBoard() {
    this.webStorageService.storeService('GAZ');
    this.router.navigate(['member/dashboard']).then(() => {
      window.location.reload();
    });
  }

  moveToMEALDashBoard() {
    this.webStorageService.storeService('MEAL');
    this.router.navigate(['member/dashboard']).then(() => {
      window.location.reload();
    });
  }
}
