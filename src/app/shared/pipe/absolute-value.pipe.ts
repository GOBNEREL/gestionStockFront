import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'absoluteValue'
})
export class AbsoluteValuePipe implements PipeTransform {
  transform(value: number | undefined): number {
    return Math.abs(value!);
  }
}
