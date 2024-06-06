import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: any | undefined): string {

    if (value) {
      let heure =value[0];
      let minute=value[1];
        if(value[0]<10){
          heure = "0"+value[0];
        }
        if(value[1]<10){
          minute = "0"+value[1]
        }

      return heure + ":" + minute;
    }
    return "";
  }

}
