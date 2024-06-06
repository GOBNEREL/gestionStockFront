import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../../core/auth/account.service";
import {LanguageService} from "../../../core/service/language.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthJwtService} from "../../../core/auth/auth-jwt.service";
import { UserDto } from 'src/gs-api/src/models';
import {ChangePasswordComponent} from "../../pages/user/change-password/change-password.component";
import {UserDetailsComponent} from "../../pages/user/user-details/user-details.component";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  logo_care_cameroon = "assets/img/LogoSkysoft.png";

  undraw_profile = "assets/user12345.jpg";

  contry_flag_us = "assets/us.svg";

  contry_flag_fr = "assets/french.jpg";

  userDto: UserDto | null = {};
  countryName: string[] = [];
  flag: string[] = [];
  langStoreValue: string = '';

  listLang = [
    {text: 'French', flag: 'assets/french.jpg', lang: 'fr'},
    {text: 'English', flag: 'assets/us.svg', lang: 'en'},
  ];

  gridListings: number | undefined;

  constructor(
    private accountService: AccountService,
    private languageService: LanguageService,
    private router: Router,
    private authJwtService: AuthJwtService,
    private ngbModal: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.accountService.identity().subscribe((userDto: UserDto | null) => {
      this.userDto = userDto;
    });
    this.langStoreValue = localStorage.getItem("language") ?? 'fr';
    const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
    this.countryName = val.map((element) => element.text);
    this.flag = val.map((element) => element.flag);
    this.languageService.setLanguage(this.langStoreValue);
  }

  detailUserModal(userDto: UserDto | null): void {
    const modalRef = this.ngbModal.open(UserDetailsComponent, {size: 'md', backdrop: 'static'});
    modalRef.componentInstance.userDto = userDto;
  }

  changePassword(loginUser: string | null | undefined): void {
    const modalRef = this.ngbModal.open(ChangePasswordComponent, {size: 'md', backdrop: 'static'});
    modalRef.componentInstance.loginUser = loginUser;
  }

  setLanguage(text: string, flag: string, lang: string) {
    this.countryName[0] = text;
    this.flag[0] = flag;
    this.langStoreValue = lang;
    this.languageService.setLanguage(lang);
  }

  // detailUserModal(userDto: UserDto | null): void {
  //   const modalRef = this.ngbModal.open(UsersDetailsComponent, {size: 'md', backdrop: 'static'});
  //   modalRef.componentInstance.userDto = userDto;
  // }

  // changePassword(loginUser: string | null | undefined): void {
  //   const modalRef = this.ngbModal.open(ChangePasswordComponent, {size: 'md', backdrop: 'static'});
  //   modalRef.componentInstance.loginUser = loginUser;
  // }

  logout(): void {
    this.authJwtService.logout();
  }

  toggle() {
    const element = document.body as HTMLBodyElement;
    element.classList.toggle('toggle-sidebar');
  }
}
