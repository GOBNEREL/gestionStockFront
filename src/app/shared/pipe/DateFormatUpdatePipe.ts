import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatUpdatePipe'
})
export class DateFormatUpdatePipe implements PipeTransform {
  transform(dateList: string | undefined): string {
    if (!dateList) {
      return '-';
    }
    const [annee, mois, jour] = dateList.slice(0, 3);
    return `${annee}-${mois.toString().padStart(2, '0')}-${jour.toString().padStart(2, '0')}`;
  }
}
