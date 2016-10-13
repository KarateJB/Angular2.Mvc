import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Customer} from './Customer';
import {CustomerService} from './Customer.Service';
declare var swal: any;

@Component({
    selector: 'customer-edit',
    providers: [CustomerService],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '/app/Basic/Customer/customer.edit.component.html',
    styleUrls: ['/app/Basic/Customer/customer.edit.component.css']
})

export class CustomerEditComponent implements OnInit {
    title: string;
    customer: Customer;
    selectedCustomer: Customer;
    constructor(
        private router: Router,
        private routeParam: RouteParams,
        private custService: CustomerService) {
        this.title = "Customers - Edit";
        this.customer = new Customer();
    }

    ngOnInit() {
        var custIdValue = this.routeParam.get('id');

        let custId = +custIdValue; //Equales to parseInt
        //let custId = parseInt(custIdValue);

        this.custService.get(custId).then(
            data => {
                console.log(data);
                this.customer = data
            });
    }

    //Save!
    private save() {
        this.custService.update(this.customer).then(
            () => {
               swal(
                        'Success!',
                        'The data has been updated.',
                        'success'
                    );
            });
    }


    //Back to list
    private backToList() {
        this.router.navigate(['Index']);

    }


}

