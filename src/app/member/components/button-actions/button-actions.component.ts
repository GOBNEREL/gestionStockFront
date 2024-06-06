import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button-actions',
  templateUrl: './button-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./button-actions.component.scss']
})
export class ButtonActionsComponent {

  @Input() isNewShow = true;
  @Input() buttonName = "button";

  @Output() newEvent = new EventEmitter();

  btnNewSuppliers(): void{
   // console.log("resultat");
    this.newEvent.emit();
    //console.log("resultat2");
  }

}
