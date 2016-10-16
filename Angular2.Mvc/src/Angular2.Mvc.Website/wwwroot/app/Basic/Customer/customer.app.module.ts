import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CustomerAppComponent }  from './customer.app.component';
import {WrapEventPipe} from './customer.pipe';
import { RouterModule } from '@angular/router';
import {CustomerRoutes, appRoutingProviders} from './customer.route';
import {CustomerIndexComponent} from './customer-index.component';
import {CustomerCreateComponent} from './customer-create.component';
import {CustomerEditComponent} from './customer-edit.component';

@NgModule({
    imports: [
        BrowserModule,
        //CustomerRoutes
        RouterModule.forRoot([
            { path: '/Basic/Customer/Index', component: CustomerIndexComponent },
            { path: '/Basic/Customer/Create', component: CustomerCreateComponent },
            { path: '/Basic/Customer/Edit/:id', component: CustomerEditComponent },
            { path: '', redirectTo: '/Basic/Customer/Index', pathMatch: 'full' }
        ])
    ],
    //declarations: [CustomerAppComponent, CustomerIndexComponent, CustomerCreateComponent, CustomerEditComponent, WrapEventPipe],
    declarations: [CustomerAppComponent, WrapEventPipe],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [CustomerAppComponent]
})
export class CustomerAppModule { }

//import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { CustomerAppComponent }  from './customer.app.component';

//@NgModule({
//    imports: [BrowserModule],
//    declarations: [CustomerAppComponent],
//    bootstrap: [CustomerAppComponent]
//})
//export class CustomerAppModule { }