import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subscription} from "rxjs";
import {AccountService} from "../../../core/auth/account.service";
import {WebStorageService} from "../../../core/auth/web-storage.service";

@Directive({
  selector: '[appHasAnyService]'
})
export class HasAnyServiceDirective {
  private services: string[] | undefined = [];
  private authenticationSubscription?: Subscription;

  constructor(private accountService: AccountService,
              private storage: WebStorageService,
              private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }

  @Input()
  set appHasAnyService(value: string | string[] | undefined) {
    this.services = typeof value === 'string' ? [value] : value;

    this.updateView();
    // Get notified each time authentication state changes.
    this.authenticationSubscription = this.accountService.getAuthenticationState().subscribe(() => this.updateView());
  }

  ngOnDestroy(): void {
    if (this.authenticationSubscription) {
      this.authenticationSubscription.unsubscribe();
    }
  }

  private updateView(): void {
    const hasAnyService = this.accountService.hasAnyService(this.services);
    this.viewContainerRef.clear();
    if (hasAnyService) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
