import { Pipe, PipeTransform } from '@angular/core';

import { Dog } from './dog';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(dog_array: Array<Dog>, field: any): any {
    return dog_array.sort((a,b) => {
      if (a[field]  < b[field]) {
        return -1
      } else if (a[field] > b[field]) {
        return 1
      } else {
        return 0
      }
    });
  }
}
