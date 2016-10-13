import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {CustomerIndexComponent} from './customer-index.component';
import {CustomerEditComponent} from './customer-edit.component';
import {CustomerRoutes} from './customer.Route';
import {SysEvent} from './TsysEvent';


@Component({
    selector: 'customer-app',
    providers: [ROUTER_PROVIDERS],
    templateUrl: '/app/Basic/Customer/customer-app.component.html',
    //directives: [ROUTER_DIRECTIVES],
    directives: [
        ROUTER_DIRECTIVES,
        CustomerIndexComponent,
        CustomerEditComponent
    ]
})

@RouteConfig(CustomerRoutes)

export class CustomerAppComponent {

    events: SysEvent[];

    constructor(private router: Router) {

        this.router.navigate(['Index']);

    }

    
}

