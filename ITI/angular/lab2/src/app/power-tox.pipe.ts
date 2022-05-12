import { Pipe, PipeTransform } from '@angular/core';

import {CommonModule} from "@angular/common";



@Pipe({
  name: 'powerTox'
})
export class PowerToxPipe implements PipeTransform {

  transform(value: number, y:number): unknown {
    return value*y;
  }


}
