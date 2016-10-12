import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Customer} from './Customer';
import {CustomerService} from './Customer.Service';
import {CustomerDetailComponent} from './customer.detail.component';
import {CustomerEditComponent} from './customer.edit.component';

declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'customer-index',
    providers: [CustomerService],
    //providers: [ROUTER_PROVIDERS, CustomerService],
    templateUrl: '/app/Basic/Customer/customer.index.component.html',
    styleUrls: ['/app/Basic/Customer/customer.index.component.css'],
    directives: [ROUTER_DIRECTIVES, CustomerDetailComponent]
})

export class CustomerIndexComponent implements OnInit {
    title: string;
    data: any[];
    selectedCustomer: Customer;
    constructor(
        private router: Router,
        private custService: CustomerService) {
        this.title = "Customers";
    }

    ngOnInit() {
        this.initCustomers();
    }

    private initCustomers() {
        this.custService.getAll().then(
            data => this.data = data); //非同步 & delay for 2 sec
    }

    //Get to edit page
    private editCustomer(item: Customer) {
        console.log("Redirect to edit page with customer id :" + item.Id);
        this.router.navigate(['Edit', { id: item.Id }]);
    }

    //Remove customer
    private deleteCustomer(item: Customer) {
        let customers = this.data;

        swal({
            title: 'Are you sure?',
            text: "The customer : " + item.Name + ", will be deleted!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function () {
            //Remove item
            var index = customers.indexOf(item);
            customers.splice(index, 1);
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


}

