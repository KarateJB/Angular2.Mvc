/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit, Inject, ElementRef} from '@angular/core';
import { CustomerMvcService } from './customermvc.service';
import {RestUriService} from '../../../service/resturi.service';

declare var swal: any;

@Component({
    selector: 'customer-createmvc',
    providers: [CustomerMvcService, RestUriService],
    templateUrl: '/app/Basic/CustomerMvc/create/customermvc-create.component.html'
})

export class CustomerMvcCreateComponent implements OnInit {
    private title: string;
    private tipHtml: string;
    private viewHtml: string;

    constructor(
        //@Inject(ElementRef) _elementRef: ElementRef,
        private elementRef: ElementRef,
        private _custmvcService: CustomerMvcService) {

        this.title = "Customer - Create";


        this.tipHtml = "<img id='tipImg' style= 'width: 30px; height: 30px;' src= 'https://watson-qa-demo.mybluemix.net/images/question-and-answer.svg' />";
        //Dynamic Html from partial view
        this.viewHtml = "<p><img src='/asset/images/gif/ajax-loader.gif'/>Please wait ...</p>";
    }


    ngOnInit() {

        //Add event listner to dom
        this.addEventListner();

        //Get partialview from server side
        this._custmvcService.queryCustomerView().then(
            value => {
                this.viewHtml = value;
            });
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

    //Save!
    //private save() {
    //    (<HTMLFormElement>document.getElementById("CreateForm")).submit();
    //}
}