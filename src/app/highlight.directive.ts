import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private eleREf: ElementRef) { 
    eleREf.nativeElement.style.fontweight = "bolder"
  }

}
