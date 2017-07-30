import { Pipe, PipeTransform } from '@angular/core';

import { User } from './../../user';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(user_list: Array<User>, field: any): any {
    return user_list.sort((a,b) => {
      if (a[field]  < b[field]) {
        return 1 //flip these for score!
      } else if (a[field] > b[field]) {
        return -1
      } else {
        return 0
      }
    });
  }
}