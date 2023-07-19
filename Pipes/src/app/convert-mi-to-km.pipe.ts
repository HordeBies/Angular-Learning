import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMiToKm'
})
export class ConvertMiToKmPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any { // ...args: unknown[] is a rest parameter, we can easily swap it to arg1: string, arg2: string, arg3: string for specific parameters
    if(!value) return '';
    return value*1.609344;
  }
}
