import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Customer} from './Customer';
import {CustomerService} from './Customer.Service';

@Component({
    selector: 'customer-edit',
    providers: [ROUTER_DIRECTIVES, CustomerService],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '/app/Basic/Customer/customer.edit.component.html',
    styleUrls: ['/app/Basic/Customer/customer.edit.component.css']
})

export class CustomerEditComponent implements OnInit {
    title: string;
    data: any[];
    selectedCustomer: Customer;
    constructor(
        private custService: CustomerService) {
        this.title = "Customers - Edit";
    }

    ngOnInit() {
    }


    //Back to list (Show list)
    private backToList() {

    }


}

