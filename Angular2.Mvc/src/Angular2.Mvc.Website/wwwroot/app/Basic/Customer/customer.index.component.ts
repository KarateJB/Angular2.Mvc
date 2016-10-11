import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'customer-index',
    templateUrl: '/app/Basic/Customer/customer.index.component.html',
    styleUrls: ['/app/Basic/Customer/customer.index.component.css']
})
export class CustomerIndexComponent implements OnInit {
    title: string;
    data: any[];
    constructor() {
        this.title = "Customers";
        this.data = customers;
    }

    ngOnInit() {

    }
}

const customers: any[] =
    [{ "Name": "<b>JB</b>", "Phone": "0933XXXXXX", "Age": 35 },
        { "Name": "<b>Lily</b>", "Phone": "0910XXXXXX", "Age": 18 },
        { "Name": "<b>Leia</b>", "Phone": "N/A", "Age": 3 },
        { "Name": "<b>Darth vader</b>", "Phone": "02-1234567", "Age": 28 },
        { "Name": "<b>Hachi</b>", "Phone": "N/A", "Age": 6 },
        { "Name": "<b>Luke Skywalker</b>", "Phone": "02-5678901", "Age": 10 },
        { "Name": "<b>Anakin Skywalker</b>", "Phone": "0988ZZZZZZ", "Age": 13 },
        { "Name": "<b>Obi wan</b>", "Phone": "0912YYYYYY", "Age": 65 }];