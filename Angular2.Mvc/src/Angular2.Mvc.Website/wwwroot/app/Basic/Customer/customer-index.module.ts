import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CustomerIndexComponent }  from './customer-index.component';
import {CustomerDetailComponent }  from './customer-detail.component';
import {CustomerService }  from './customer.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [CustomerIndexComponent, CustomerDetailComponent],
    providers: [CustomerService],
    bootstrap: [CustomerIndexComponent]
})
export class CustomerAppModule { }