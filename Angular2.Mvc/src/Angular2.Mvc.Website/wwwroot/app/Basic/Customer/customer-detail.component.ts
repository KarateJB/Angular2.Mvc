import {Component, OnInit, Input} from 'angular2/core';
import {Customer} from './Customer';

@Component({
    selector: 'customer-detail',
    templateUrl: '/app/Basic/Customer/customer-detail.component.html',
    styleUrls: ['/app/Basic/Customer/customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

    @Input('selectedCustomer') customer: Customer; 

    constructor() {
        console.log("Initialize Customer detail");
    }

    ngOnInit() {
        setTimeout(() => console.log("已選擇=" + this.customer.Name), 8000)
    }
}