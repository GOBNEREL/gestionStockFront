import { Injectable } from '@angular/core';
import {UserService} from "../service/user.service";
import {ActivatedRouteSnapshot} from "@angular/router";
import {mergeMap, Observable, of} from "rxjs";
import {UserDto} from "../../../../../gs-api/src/models/user-dto";


@Injectable({
  providedIn: 'root'
})
export class UserResolveServiceService {

  constructor(
    private userService: UserService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<UserDto> {
    const login = route.params['login'] != null ? route.params['login'] : null;
    if(login) {
      return this.userService.SearchByLogin({login: login, language: localStorage.getItem('language') ?? 'fr'}).pipe(
        mergeMap((user: UserDto) => {
          return of(user);
        })
      );
    }
    return of({});
  }




}
