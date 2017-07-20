import { Pipe, PipeTransform } from '@angular/core';

import { Dog } from './dog';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(dog_array: Array<Dog>, search: string): Array<Dog> {
    search = search.toLowerCase()

    return dog_array.filter(dog => {
      return dog.name.toLowerCase().includes(search) || dog.description.toLowerCase().includes(search)
    })
  }

}
