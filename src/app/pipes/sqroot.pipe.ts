import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqroot',
})
export class SqrootPipe implements PipeTransform {
  transform(value: number, uom: string = ''): unknown {
    return `${Math.sqrt(value)} ${uom}`;
  }
}
