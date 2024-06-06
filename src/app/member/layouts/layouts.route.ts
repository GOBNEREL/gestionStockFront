import {Routes} from "@angular/router";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {FooterComponent} from "./footer/footer.component";
import {TopbarComponent} from "./topbar/topbar.component";
import {ScrollToTopRoundedComponent} from "./scroll-to-top-rounded/scroll-to-top-rounded.component";

export const layoutsRouters: Routes = [
    {
        path: '',
        component: TopbarComponent,
        outlet: 'topbar'
    },
    {
        path: '',
        component: SidebarComponent,
        outlet: 'sidebar'
    },
    {
      path: '',
      component: ScrollToTopRoundedComponent,
      outlet: 'scrolltotop'
    },
    {
        path: '',
        component: FooterComponent,
        outlet: 'footer'
    }
];
