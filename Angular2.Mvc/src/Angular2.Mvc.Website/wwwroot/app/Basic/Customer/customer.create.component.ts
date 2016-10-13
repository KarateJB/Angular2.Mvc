import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Customer} from './Customer';
import {CustomerService} from './Customer.Service';
declare var swal: any;


@Component({
    selector: 'customer-create',
    providers: [CustomerService],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '/app/Basic/Customer/customer.create.component.html',
    styleUrls: ['/app/Basic/Customer/customer.create.component.css']
})

export class CustomerCreateComponent implements OnInit {
    title: string;
    customer: Customer;
    constructor(
        private router: Router,
        private custService: CustomerService) {
        this.title = "Customer - Create";
        this.customer = new Customer();
    }

    ngOnInit() {

    }

    //Save!
    private save() {
        this.custService.update(this.customer).then(
            () => {
                swal(
                    'Success!',
                    'The data has been saved.',
                    'success'
                ).then(function () {
                    this.router.navigate(['Index']);
                });
            });
    }

    //Back to list
    private backToList() {
        this.router.navigate(['Index']);

    }
}