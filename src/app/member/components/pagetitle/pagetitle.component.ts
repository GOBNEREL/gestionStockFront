import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./pagetitle.component.scss']
})
export class PagetitleComponent {

  @Input() first: string = '';

  @Input() second: string = '';

  @Input() isActifFirst: boolean = false;

  @Input() isActifSecond: boolean = false;

  @Input() pagetitle: string = '';

}
