import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent {

  @Input() form: FormGroup = new FormGroup({});
  @Input() message: string = '';
  @Input() field: string = '';
  @Input() messageMinlength: string = '';
  @Input() messageMaxlength: string = '';
  @Input() minlength: boolean = false;
  @Input() maxlength: boolean = false;
}
