import {Component, OnInit} from 'angular2/core';
import {Customer} from './Customer';
import {CustomerService} from './Customer.Service';

@Component({
    selector: 'customer-index',
    providers: [CustomerService],
    templateUrl: '/app/Basic/Customer/customer.index.component.html',
    styleUrls: ['/app/Basic/Customer/customer.index.component.css']
})
export class CustomerIndexComponent implements OnInit {
    title: string;
    data: any[];
    constructor(private custService: CustomerService) {
        this.title = "Customers";
    }

    ngOnInit() {
        this.initCustomers();
    }

    private initCustomers() {
        this.custService.getAll().then(
            data =>this.data = data); //非同步 & delay for 2 sec
    }

    private deleteCustomer(item: Customer) {
        //Remove item
        var index = this.data.indexOf(item);
        this.data.splice(index, 1);
    }
}

