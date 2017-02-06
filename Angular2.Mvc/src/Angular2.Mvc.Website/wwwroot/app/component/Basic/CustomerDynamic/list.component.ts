/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit, Input} from '@angular/core';
import {Customer} from '../../../class/Customer';
import {CustomerService} from '../../../service/customer.service';
import {RestUriService} from '../../../service/resturi.service';


@Component({
    selector: 'customerdynamic-list',
    providers: [CustomerService, RestUriService],
    templateUrl: '/app/component/Basic/CustomerDynamic/list.component.html'
})

export class CustomerDynamicListComponent implements OnInit {
    @Input() inputValue: number;

    customers: Customer[];
    constructor(private custService: CustomerService) {
    }


    ngOnInit() {
        this.initCustomers();
    }

    private initCustomers() {
        this.custService.getAll().then(
            data => {
                this.customers = [];
                if (!this.inputValue) {
                    this.customers = data
                }
                else {
                    for (let i = 0; i < this.inputValue; i++) {
                        this.customers.push(data[i]);
                    }
                }
            });
    }
}