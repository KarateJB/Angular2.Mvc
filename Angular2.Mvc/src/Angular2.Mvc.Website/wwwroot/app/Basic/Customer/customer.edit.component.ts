import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
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
        console.log("custId=" + custIdValue);

        let custId = +custIdValue; //Equales to parseInt
        //let custId = parseInt(custIdValue);

        this.custService.get(custId).then(
                data => {
                    console.log(data);
                    this.customer = data
                });
    }

    //Back to list
    private BackToList() {
        this.router.navigate(['Index']);
    }


    //Back to list (Show list)
    private backToList() {

    }


}

