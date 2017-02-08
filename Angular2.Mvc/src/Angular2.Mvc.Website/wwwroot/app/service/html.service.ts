import { Injectable, Sanitizer, SecurityContext } from '@angular/core';

@Injectable()
export class HtmlService {


    constructor(private sanitizer: Sanitizer) {
        
    }

    //Decode Html string
    public decodeHtml(htmlstr: string) {
        var txt = document.createElement("textarea");
        txt.innerHTML = htmlstr;
        return txt.value;
    }

    //Sanitize Html string to keep it safe
    public sanitizeHtml(htmlstr: string) {
        return this.sanitizer.sanitize(SecurityContext.HTML, htmlstr);
    }
}

