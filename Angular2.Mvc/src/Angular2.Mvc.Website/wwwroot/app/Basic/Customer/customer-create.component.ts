import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Customer} from './Tcustomer';
import {CustomerService} from './customer.service';
import {RestUriService} from '../../service/resturi.service';
declare var swal: any;


@Component({
    selector: 'customer-create',
    providers: [CustomerService, RestUriService],
    templateUrl: '/app/Basic/Customer/customer-create.component.html',
    styleUrls: ['/app/Basic/Customer/customer-create.component.css']
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
        this.custService.create(this.customer).then(
            () => {

                var rt = this.router;

                swal(
                    'Success!',
                    'The data has been saved.',
                    'success'
                ).then(function () {
                    //Return to Index
                    rt.navigate(['Basic/Customer/Index']);
                });

            });
    }

    //Back to list
    private backToList() {
        this.router.navigate(['Basic/Customer/Index']);

    }
}