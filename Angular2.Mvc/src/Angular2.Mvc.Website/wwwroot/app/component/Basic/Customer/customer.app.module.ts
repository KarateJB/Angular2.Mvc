import { NgModule,LOCALE_ID }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {CustomerRoutes} from './customer.route';
import {WrapEventPipe} from './customer.pipe';
import {CustomerAppComponent }  from './customer.app.component';
import {CustomerIndexComponent} from './customer-index.component';
import {CustomerDetailComponent} from './customer-detail.component';
import {CustomerCreateComponent} from './customer-create.component';
import {CustomerEditComponent} from './customer-edit.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        HttpModule,
        CustomerRoutes
        //RouterModule.forRoot([
        //    { path: 'Basic/Customer/Index', component: CustomerIndexComponent },
        //    { path: 'Basic/Customer/Create', component: CustomerCreateComponent },
        //    { path: 'Basic/Customer/Edit/:id', component: CustomerEditComponent },
        //    { path: '', redirectTo: 'Basic/Customer/Index', pathMatch: 'full' }
        //])
    ],
    declarations: [CustomerAppComponent, CustomerIndexComponent, CustomerDetailComponent, CustomerCreateComponent, CustomerEditComponent,WrapEventPipe],
    providers: [
        //appRoutingProviders,
        { provide: LOCALE_ID, useValue: "zh-TW" }, //replace "en-US" with your locale
    ],
    bootstrap: [CustomerAppComponent]
})
export class CustomerAppModule { }
