/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit, Inject, ElementRef} from '@angular/core';
import { CustomerMvcService } from './customermvc.service';
import {RestUriService} from '../../service/resturi.service';

declare var swal: any;

@Component({
    selector: 'customermvc-create',
    providers: [CustomerMvcService, RestUriService],
    //templateUrl: '/app/Basic/CustomerMvc/create.component.html'
    templateUrl: '/Basic/CustomerMvc/Create'
})

export class CustomerMvcCreateComp implements OnInit {
    private tipHtml: string;
    private viewHtml: string;

    constructor(
        //@Inject(ElementRef) _elementRef: ElementRef,
        private elementRef: ElementRef,
        private _custmvcService: CustomerMvcService) {
    }


    ngOnInit() {

        //Add event listner to dom
        this.addEventListner();
    }

    private addEventListner() {
        let el = this.elementRef.nativeElement.querySelector("#tipImg");
        el.addEventListener('click', e => {
            e.preventDefault();
            this.showTip();
        });
    }

    private showTip() {
        swal(
            'Tip',
            'Required information : Name, Phone.'
        ).then(function () {
        });
    }

}