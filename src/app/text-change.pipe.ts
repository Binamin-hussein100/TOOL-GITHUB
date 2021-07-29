import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textChange'
})
export class TextChangePipe implements PipeTransform {

  transform(value: any, ...args: any):any{
      switch(args || null){
        case 'uppercase':
          return value.toUpperCase();
      }
  }

}
