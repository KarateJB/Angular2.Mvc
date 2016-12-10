/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit, Inject, ElementRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { CustomerService } from '../../../service/customer.service';
import {RestUriService} from '../../../service/resturi.service';

declare var swal: any;

@Component({
    selector: 'customermvc-edit',
    providers: [CustomerService, RestUriService],
    //templateUrl: '/app/component/Basic/CustomerMvc/create.component.html'
    templateUrl: '/Basic/CustomerMvc/Edit'
})

export class CustomerMvcEditComp implements OnInit {

    private id: number;
    private name: string;
    private phone: string;
    private age: number;
    private description: string;

    constructor(
        private elementRef: ElementRef,
        private route: ActivatedRoute,
        private custService: CustomerService) {

    }


    ngOnInit() {

        //Add event listner to dom
        this.addEventListner();

        //Get route parameter
        this.route.params.subscribe(params => {
            let custIdValue = params['id'];
            let custId = +custIdValue; //Equales to parseInt
            console.log("query id = " + +custIdValue);

            this.custService.get(custId).then(cust => {
                this.id = cust.Id;
                this.name = cust.Name;
                this.age = cust.Age;
                this.phone = cust.Phone;
                this.description = cust.Description;
            })
        });

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
        (<HTMLFormElement>document.getElementById("EditForm")).submit();
    }

}