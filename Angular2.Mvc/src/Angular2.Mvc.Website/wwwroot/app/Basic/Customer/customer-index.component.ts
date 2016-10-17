﻿import {Component,Pipe,PipeTransform, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Customer} from './Tcustomer';
import {SysEvent} from './TsysEvent';
import {CustomerService} from './customer.service';
import {RestUriService} from '../../service/resturi.service';

declare var swal: any; //SweetAlert2 typings definition

@Pipe({
    name: 'wrapEvent',
    pure:true //Default is true
})

@Component({
    selector: 'customer-index',
    providers: [CustomerService, RestUriService],
    //providers: [ROUTER_PROVIDERS, CustomerService],
    templateUrl: '/app/Basic/Customer/customer-index.component.html',
    styleUrls: ['/app/Basic/Customer/customer-index.component.css']
})

export class CustomerIndexComponent implements OnInit {
    title: string;
    customers: Customer[];
    events: SysEvent[];
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
            data => {
                for (let i = 0; i < data.length; i++) {
                    console.log(data[i].Name);
                }
                this.customers = data
            }); //非同步 & delay for 2 sec
    }

    //Search when [Enter] is keyup
    private search(searchKeyword: string) {
        if (searchKeyword.length > 0) {
            let filteredCusts = this.custService.search(searchKeyword);
            this.customers = filteredCusts;
        }
        else {
            this.custService.getAll().then(
                data => this.customers = data); //非同步 & delay for 2 sec
        }
    }


    //Go to create page
    private goToCreate() {
        this.router.navigate(['/Basic/Customer/Create']);
    }

    //Get to edit page
    private editCustomer(item: Customer) {
        this.router.navigate(['/Basic/Customer/Edit', item.Id]);
    }

    //Remove customer
    private deleteCustomer(item: Customer) {

        let customers = this.customers;

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

    //Set the emit event data from chile component to local variable
    private setSysEvents(data: SysEvent[]) {
        console.log(data);
        this.events = data;
    }


}

