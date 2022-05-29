import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat',
})
export class RepeatPipe implements PipeTransform {
  transform(word: string, frequency: number): string {
    let cnt = 1;
    let strResult = word;
    while (cnt < frequency) {
      strResult = strResult + ' ' + word;
      cnt = cnt + 1;
    }
    return strResult;
  }
}
