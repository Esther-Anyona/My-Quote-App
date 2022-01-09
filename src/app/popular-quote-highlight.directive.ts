import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPopularQuoteHighlight]'
})
export class PopularQuoteHighlightDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.color="blue";
   }

}
