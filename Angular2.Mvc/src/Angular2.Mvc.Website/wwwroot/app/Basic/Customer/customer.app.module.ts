//import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import {CustomerAppComponent }  from './customer.app.component';
//import {WrapEventPipe} from './customer.pipe';
//import { RouterModule } from '@angular/router';
//import {CustomerRoutes} from './customer.route';

//@NgModule({
//    imports: [
//        BrowserModule,
//        RouterModule.forRoot(CustomerRoutes)
//    ],
//    declarations: [CustomerAppComponent, WrapEventPipe],
//    bootstrap: [CustomerAppComponent]
//})
//export class CustomerAppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerAppComponent }  from './customer.app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [CustomerAppComponent],
    bootstrap: [CustomerAppComponent]
})
export class CustomerAppModule { }