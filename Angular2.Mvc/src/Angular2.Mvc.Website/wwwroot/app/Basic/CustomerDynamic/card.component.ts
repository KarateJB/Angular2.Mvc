/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit} from '@angular/core';
import {Customer} from '../../class/Customer';
import {CustomerService} from '../../service/customer.service';
import {RestUriService} from '../../service/resturi.service';


@Component({
    selector: 'customerdynamic-card',
    providers: [CustomerService, RestUriService],
    templateUrl: '/app/Basic/CustomerDynamic/card.component.html'
})

export class CustomerDynamicCardComponent implements OnInit {

    customers: Customer[];
    constructor(private custService: CustomerService) {
    }


    ngOnInit() {
        this.initCustomers();
    }

    private initCustomers() {
        this.custService.getAll().then(
            data => {
                this.customers = data
            });
    }
}