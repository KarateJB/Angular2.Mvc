import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {CustomerIndexComponent} from './customer.index.component';
import {CustomerEditComponent} from './customer.edit.component';
import {CustomerRoutes} from './customer.Route';


@Component({
    selector: 'customer-app',
    providers: [ROUTER_PROVIDERS],
    templateUrl: '/app/Basic/Customer/customer.app.component.html',
    //directives: [ROUTER_DIRECTIVES],
    directives: [
        ROUTER_DIRECTIVES,
        CustomerIndexComponent,
        CustomerEditComponent
    ]
})

@RouteConfig(CustomerRoutes
//@RouteConfig([
//    { path: '/Basic/Customer/Index', name: 'Index', component: CustomerIndexComponent },
//    { path: '/Basic/Customer/Edit:id', name: 'Edit', component: CustomerEditComponent }
//])

export class CustomerAppComponent {
    constructor(private router: Router) {

        console.log("Redirect to index page!");
        this.router.navigate(['Index']);

    }
}

