import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input()
  dtos: any = [];

  @Input()
  gridListings = 1;

}
