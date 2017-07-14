import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby',
  pure: false
})
export class OrderbyPipe implements PipeTransform {

  transform(arr: Array<any>, key, flow): any {
    for (let y = 0; y < arr.length; y ++){
      for (let x = 0; x < arr.length - 1 ; x++) {
        if (arr[x].rating > arr[x+1].rating) {
          var temp = arr[x];
          arr[x] = arr[x+1];
          arr[x+1] = temp;
        }
      }
    }
    if (flow === 'asc') {
      return arr;
    }
    return arr.reverse();
  }

}

