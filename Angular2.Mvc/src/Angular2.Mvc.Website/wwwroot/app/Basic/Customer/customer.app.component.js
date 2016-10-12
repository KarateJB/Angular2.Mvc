System.register(['angular2/core', 'angular2/router', './customer.index.component', './customer.edit.component', './customer.Route'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, customer_index_component_1, customer_edit_component_1, customer_Route_1;
    var CustomerAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (customer_index_component_1_1) {
                customer_index_component_1 = customer_index_component_1_1;
            },
            function (customer_edit_component_1_1) {
                customer_edit_component_1 = customer_edit_component_1_1;
            },
            function (customer_Route_1_1) {
                customer_Route_1 = customer_Route_1_1;
            }],
        execute: function() {
            CustomerAppComponent = (function () {
                function CustomerAppComponent(router) {
                    this.router = router;
                    console.log("Redirect to index page!");
                    this.router.navigate(['Index']);
                }
                CustomerAppComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-app',
                        providers: [router_1.ROUTER_PROVIDERS],
                        templateUrl: '/app/Basic/Customer/customer.app.component.html',
                        //directives: [ROUTER_DIRECTIVES],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            customer_index_component_1.CustomerIndexComponent,
                            customer_edit_component_1.CustomerEditComponent
                        ]
                    }),
                    router_1.RouteConfig(customer_Route_1.CustomerRoutes), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], CustomerAppComponent);
                return CustomerAppComponent;
            }());
            exports_1("CustomerAppComponent", CustomerAppComponent);
        }
    }
});
//# sourceMappingURL=customer.app.component.js.map