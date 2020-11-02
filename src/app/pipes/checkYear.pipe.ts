import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkYear',
})
export class CheckYearPipe implements PipeTransform {
  transform(value: any): any {
    return 'Year value' + value;
  }
}
