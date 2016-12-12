/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import { Component, OnInit, Input, ElementRef} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

declare var swal: any;

@Component({
    selector: 'customermvc-app',
    template: '<router-outlet></router-outlet>'
})
export class CustomerMvcAppComp implements OnInit {

    private _error: string;
    constructor(private elementRef: ElementRef) {
        
    }
    ngOnInit() {
        this._error = this.elementRef.nativeElement.getAttribute('error');
        if (this._error) {
            var err = this._error;
            swal(
                'Error',
                err,
                'error'
            ).then(function () {
            });
        }
    }
}

