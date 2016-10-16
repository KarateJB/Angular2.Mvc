System.register(['@angular/core', '@angular/forms', '@angular/platform-browser', './customer.app.component', '@angular/router', './customer.route', './customer.pipe', './customer-index.component', './customer-detail.component', './customer-create.component', './customer-edit.component'], function(exports_1, context_1) {
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
    var core_1, forms_1, platform_browser_1, customer_app_component_1, router_1, customer_route_1, customer_pipe_1, customer_index_component_1, customer_detail_component_1, customer_create_component_1, customer_edit_component_1;
    var CustomerAppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (customer_app_component_1_1) {
                customer_app_component_1 = customer_app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (customer_route_1_1) {
                customer_route_1 = customer_route_1_1;
            },
            function (customer_pipe_1_1) {
                customer_pipe_1 = customer_pipe_1_1;
            },
            function (customer_index_component_1_1) {
                customer_index_component_1 = customer_index_component_1_1;
            },
            function (customer_detail_component_1_1) {
                customer_detail_component_1 = customer_detail_component_1_1;
            },
            function (customer_create_component_1_1) {
                customer_create_component_1 = customer_create_component_1_1;
            },
            function (customer_edit_component_1_1) {
                customer_edit_component_1 = customer_edit_component_1_1;
            }],
        execute: function() {
            CustomerAppModule = (function () {
                function CustomerAppModule() {
                }
                CustomerAppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            //CustomerRoutes
                            router_1.RouterModule.forRoot([
                                { path: 'Basic/Customer/Index', component: customer_index_component_1.CustomerIndexComponent },
                                { path: 'Basic/Customer/Create', component: customer_create_component_1.CustomerCreateComponent },
                                { path: 'Basic/Customer/Edit/:id', component: customer_edit_component_1.CustomerEditComponent },
                                { path: '', redirectTo: 'Basic/Customer/Index', pathMatch: 'full' }
                            ])
                        ],
                        declarations: [customer_app_component_1.CustomerAppComponent, customer_index_component_1.CustomerIndexComponent, customer_detail_component_1.CustomerDetailComponent, customer_create_component_1.CustomerCreateComponent, customer_edit_component_1.CustomerEditComponent, customer_pipe_1.WrapEventPipe],
                        providers: [
                            customer_route_1.appRoutingProviders,
                            { provide: core_1.LOCALE_ID, useValue: "en-US" },
                        ],
                        bootstrap: [customer_app_component_1.CustomerAppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomerAppModule);
                return CustomerAppModule;
            }());
            exports_1("CustomerAppModule", CustomerAppModule);
        }
    }
});
//# sourceMappingURL=customer.app.module.js.map