/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import { Component, Pipe, PipeTransform, ViewContainerRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../../class/Customer';
import { SysEvent } from '../../../class/SysEvent';
import { CustomerService } from '../../../service/customer.service';
import { HtmlService } from '../../../service/html.service';
import { RestUriService } from '../../../service/resturi.service';
import { BlockUIService } from '../../blockUI/blockUI.service';
import { SafeHtml } from '../../../directive/safe-html.directive';


declare var swal: any; //SweetAlert2 typings definition

@Pipe({
    name: 'wrapEvent',
    pure: true //Default is true
})

@Component({
    selector: 'customer-index',
    providers: [CustomerService, HtmlService,  RestUriService, BlockUIService],
    //providers: [ROUTER_PROVIDERS, CustomerService],
    templateUrl: '/app/component/Basic/Customer/customer-index.component.html',
    styleUrls: ['/app/component/Basic/Customer/customer-index.component.css']
})

export class CustomerIndexComponent implements OnInit {
    title: string;
    customers: Customer[];
    events: SysEvent[];
    selectedCustomer: Customer;
    htmlStr: string;

    constructor(
        private router: Router,
        private viewContainerRef: ViewContainerRef,
        private blockUI: BlockUIService,
        private custService: CustomerService,
        private htmlService: HtmlService) {
        this.blockUI.vRef = this.viewContainerRef;
        this.title = "Customers";
        this.htmlStr = "<script>alert('Testing!');</script>";

        let testStr = "XXX%20XXXX%20&#39134;&#24605;&#21345;&#23572;&#26368;&#26032;MCU";
        let decodedHtml = htmlService.decodeHtml(testStr);
        let sanitizedHtml = htmlService.sanitizeHtml(this.htmlStr);

        JL("Angular").debug('decodedHtml = ' + decodedHtml);
        JL("Angular").debug('sanitizedHtml = ' + sanitizedHtml);
    }

    ngOnInit() {
        this.blockUI.start();
        this.initCustomers();
    }

    private initCustomers() {
        this.custService.getAll().then(
            data => {
                //for (let i = 0; i < data.length; i++) {
                //    console.log(data[i].Name);
                //}
                this.customers = data

                this.blockUI.stop();
            }); //非同步 & delay for 2 sec
    }

    //Search when [Enter] is keyup
    private search(searchKeyword: string) {
        if (searchKeyword.length > 0) {
            let filteredCusts = this.custService.search(searchKeyword);
            this.customers = filteredCusts;
        }
        else {
            this.custService.getAll().then(
                data => this.customers = data); //非同步 & delay for 2 sec
        }
    }


    //Go to create page
    private goToCreate() {
        this.router.navigate(['Basic/Customer/Create']);
    }

    //Get to edit page
    private editCustomer(item: Customer) {
        this.router.navigate(['Basic/Customer/Edit', item.Id]);
    }

    //Remove customer
    private deleteCustomer(item: Customer) {

        let customers = this.customers;
        let service = this.custService;

        swal({
            title: 'Are you sure?',
            text: "The customer : " + item.Name + ", will be deleted!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function () {

            service.remove(item).then(
                () => {
                    //Remove item in Front-end
                    var index = customers.indexOf(item);
                    customers.splice(index, 1);
                });

        })
    }

    //Show details of the customer
    private showDetail(cust: Customer) {

        this.selectedCustomer = cust;
    }

    //Back to list (Show list)
    private backToList() {
        this.selectedCustomer = null;

    }

    //Set the emit event data from chile component to local variable
    private setSysEvents(data: SysEvent[]) {
        console.log(data);
        this.events = data;
    }


}

