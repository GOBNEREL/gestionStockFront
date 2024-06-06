import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public languages: string[] = ['en', 'fr'];

  constructor(public translate: TranslateService) {
    let browserLang;
    translate.addLangs(this.languages);

    if (localStorage.getItem("language")) {
      browserLang = localStorage.getItem("language");
    } else {
      browserLang = translate.getBrowserLang();
    }
    translate.use(browserLang?.match(/en|fr/) ? browserLang : 'fr');
  }

  public setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem("language", lang);
  }
}
