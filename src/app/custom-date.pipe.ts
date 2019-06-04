import { Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe extends DatePipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    let today = new Date();
    if (value 
      && value.getFullYear() == today.getFullYear()
      && value.getMonth() == today.getMonth()
      && value.getDay() == today.getDay()
    ) {
      return 'today ' + super.transform(value, 'hh:mm')
    } 
    else {
      return super.transform(value, args);
    }
  }

}
