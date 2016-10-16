import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
    selector: 'customer-app',
    templateUrl: '/app/Basic/Customer/customer.app.component.html'
})
export class CustomerAppComponent implements OnInit {
    ngOnInit() {
    }
}  

//import {Component, OnInit} from '@angular/core';
//import {Router,RouterModule} from '@angular/router';
//import {CustomerIndexComponent} from './customer-index.component';
//import {CustomerEditComponent} from './customer-edit.component';
//import {CustomerRoutes} from './customer.Route';
//import {SysEvent} from './TsysEvent';


//@Component({
//    selector: 'customer-app',
//    templateUrl: '/app/Basic/Customer/customer.app.component.html'
//})

//export class CustomerAppComponent {

//    events: SysEvent[];

//    constructor(
//        private router: Router
//    ) {

//        this.router.navigate(['Index']);

//    }

    
//}

