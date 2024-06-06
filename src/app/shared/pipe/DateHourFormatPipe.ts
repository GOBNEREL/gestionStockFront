import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateHourFormat'
})
export class DateHourFormatPipe implements PipeTransform {
  transform(dateList: string | undefined): string {
    if (!dateList) {
      return '-';
    }
    const [annee, mois, jour, heure, minute, seconde] = dateList.slice(0, 6);

    const formattedDate = `${jour.toString().padStart(2, '0')}/${mois.toString().padStart(2, '0')}/${annee}`;
    const formattedTime = `${heure.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${seconde.toString().padStart(2, '0')}`;
    return `${formattedDate} ${formattedTime}`;
  }
}
