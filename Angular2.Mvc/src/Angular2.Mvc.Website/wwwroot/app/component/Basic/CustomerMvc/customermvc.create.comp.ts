/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit, Inject, ElementRef} from '@angular/core';
import { CustomerMvcService } from './customermvc.service';
import {RestUriService} from '../../../service/resturi.service';

declare var swal: any;

@Component({
    selector: 'customermvc-create',
    providers: [CustomerMvcService, RestUriService],
    //templateUrl: '/app/component/Basic/CustomerMvc/create.component.html'
    templateUrl: '/Basic/CustomerMvc/Create'
})

export class CustomerMvcCreateComp implements OnInit {

    constructor(
        //@Inject(ElementRef) _elementRef: ElementRef,
        private elementRef: ElementRef,
        private _custmvcService: CustomerMvcService) {
    }


    ngOnInit() {

        this.addEventListner();
    }

    private addEventListner() {
        let el = this.elementRef.nativeElement.querySelector("#tipImg");
        if (el) {
            el.addEventListener('click', e => {
                e.preventDefault();
                this.showTip();
            });
        }
    }

    private showTip() {
        swal(
            'Tip',
            'Required information : Name, Phone.'
        ).then(function () {
        });
    }

    //Submit
    private submit() {
        (<HTMLFormElement>document.getElementById("CreateForm")).submit();
    }

}