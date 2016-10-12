import {Component, OnInit} from 'angular2/core';
import {Customer} from './Customer';
import {CustomerService} from './Customer.Service';
import {CustomerDetailComponent} from './customer.detail.component';

@Component({
    selector: 'customer-index',
    providers: [CustomerService],
    templateUrl: '/app/Basic/Customer/customer.index.component.html',
    styleUrls: ['/app/Basic/Customer/customer.index.component.css'],
    directives: [CustomerDetailComponent]
})
export class CustomerIndexComponent implements OnInit {
    title: string;
    data: any[];
    selectedCustomer: Customer;
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

    //Get to edit page
    private editCustomer(item: Customer) {

    }

    //Remove customer
    private deleteCustomer(item: Customer) {
        //Remove item
        var index = this.data.indexOf(item);
        this.data.splice(index, 1);
    }

    //Show details of the customer
    private showDetail(cust: Customer) {
        
        this.selectedCustomer = cust;
    }

    //Back to list (Show list)
    private backToList() {
        this.selectedCustomer = null;

    }


}

