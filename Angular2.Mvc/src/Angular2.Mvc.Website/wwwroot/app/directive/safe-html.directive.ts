import { Directive, ElementRef, Input, ViewContainerRef, Compiler, OnChanges, Sanitizer, SecurityContext } from '@angular/core';
//import { CommonModule } from '@angular/common';

@Directive({
    selector: '[safe-html]'
})
export class SafeHtml implements OnChanges {
    @Input() html: string;

    constructor(private elementRef: ElementRef, private sanitizer: Sanitizer) {


    }

    ngOnChanges() {

        if (this.html) {
            this.elementRef.nativeElement.innerHTML =
                this.sanitizer.sanitize(SecurityContext.HTML, this.html);
        }
    }
}

/*
Usage:

<div safe-html [html]="htmlStr"></div>

*/

