import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(dateList: string | undefined): string {
    if (!dateList) {
      return '-';
    }
    const [annee, mois, jour] = dateList.slice(0, 3);
    return `${jour.toString().padStart(2, '0')}/${mois.toString().padStart(2, '0')}/${annee}`;
  }
}
