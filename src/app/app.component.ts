import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ngx-loading-bar diameter="20px" color="#ff771d" height="5px"></ngx-loading-bar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'care_cameroun_frontend';
}
