import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthJwtService} from "../auth/auth-jwt.service";
import {tap} from "rxjs/operators";

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {

  constructor(
    private authJwtService: AuthJwtService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap({
      error: (error: HttpErrorResponse) => {
        if ([401, 403, 0].includes(error.status) && error.url && !error.url.includes('care_cameroon/v1/api/users/currentUser')) {
          this.authJwtService.logoutWithoutObserver();
        }
      }
    }));
  }
}
