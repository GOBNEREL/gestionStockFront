import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDatePipe'
})
export class MyDatePipe implements PipeTransform {
  transform(dateList: number[]): string {
    const [annee, mois, jour] = dateList.slice(0, 3);
    return `${jour.toString().padStart(2, '0')}/${mois.toString().padStart(2, '0')}/${annee}`;
  }
}
