import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'mypipe' })
export class Mypipe implements PipeTransform {
  // adding a default format in case you don't want to pass the format
  // then 'yyyy-MM-dd' will be used
  transform(
    date: Date | string,
    day: number,
    format: string = 'yyyy-MM-dd'
  ): any {
    date = new Date(date); // if orginal type was a string
    date.setDate(date.getDate());
    return new DatePipe('en-US').transform(date, format);
  }
}
