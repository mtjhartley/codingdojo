import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../user';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(user_list: Array<User>, search_string: string): Array<User> {
    search_string = search_string.toLowerCase()

    return user_list.filter(user => {
      let percentage = user.score * 100 / user.total
      return user.name.toLowerCase().includes(search_string)
      || user.score.toString().includes(search_string)
      || percentage.toString().includes(search_string)
    })
  }

}
