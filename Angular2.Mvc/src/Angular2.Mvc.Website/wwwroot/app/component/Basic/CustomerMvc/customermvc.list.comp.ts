/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit, Inject, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {Customer} from '../../../class/Customer';
import {CustomerService} from '../../../service/customer.service';
import {RestUriService} from '../../../service/resturi.service';

declare var swal: any;

@Component({
    selector: 'customermvc-list',
    providers: [CustomerService, RestUriService],
    templateUrl: '/Basic/CustomerMvc/List'
})

export class CustomerMvcListComp implements OnInit {
    private title: string;
    private tipHtml: string;
    private viewHtml: string;

    constructor(
        private router: Router,
        private elementRef: ElementRef,
        private custService: CustomerService) {
        JL("Angular2").debug("Come to list page!");
    }


    ngOnInit() {

        //Add event listner to dom
        this.addEventListner();
    }

    private addEventListner() {
        //let el = this.elementRef.nativeElement.querySelector("#tipImg");
        //el.addEventListener('click', e => {
        //    e.preventDefault();
        //    this.showTip();
        //});
    }


    //Get to edit page
    private goToCreate() {
        this.router.navigate(['Basic/CustomerMvc/Create']);
    }

    //Get to edit page
    private editCustomer(id: number) {
        this.router.navigate(['Basic/CustomerMvc/Edit', id]);
        //this.router.navigate(['Basic/CustomerMvc/Edit', { 'id': id }]); //Use for more url parameter
    }

    //Remove customer
    private deleteCustomer(id: number) {

        let service = this.custService;
        let router = this.router;

        swal({
            title: 'Are you sure?',
            text: "The customer will be deleted!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function () {

            service.removeById(id).then(
                () => {
                    console.log("Redirect to Basic/CustomerMvc/Index");
                    //Refresh or just hide the front end removed-data
                    document.location.href = "Basic/CustomerMvc/Index";
                });

        })
    }

}