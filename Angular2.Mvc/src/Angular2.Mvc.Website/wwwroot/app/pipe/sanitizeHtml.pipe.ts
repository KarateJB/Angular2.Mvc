import { Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml} from '@angular/platform-browser';

@Pipe({
    name: 'sanitizeHtml'
})
export class SanitizeHtml implements PipeTransform {

    constructor(private _sanitizer: DomSanitizer) { }

    transform(input: string): SafeHtml {
        return this._sanitizer.bypassSecurityTrustHtml(input);
    }
} 