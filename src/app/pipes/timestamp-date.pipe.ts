import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name: "timestampDate"})
export class TimestampDatePipe implements PipeTransform {

  transform(value: number): Date {
    if (value) {
      return new Date(value * 1000);
    }
  }
}
