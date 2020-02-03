import { Pipe, PipeTransform } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.substring(0, 100);
  }

}
