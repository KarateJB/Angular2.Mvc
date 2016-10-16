System.register(['@angular/core', '@angular/platform-browser', './customer-index.component', './customer-detail.component', './customer.service'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, customer_index_component_1, customer_detail_component_1, customer_service_1;
    var CustomerAppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (customer_index_component_1_1) {
                customer_index_component_1 = customer_index_component_1_1;
            },
            function (customer_detail_component_1_1) {
                customer_detail_component_1 = customer_detail_component_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            }],
        execute: function() {
            CustomerAppModule = (function () {
                function CustomerAppModule() {
                }
                CustomerAppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule],
                        declarations: [customer_index_component_1.CustomerIndexComponent, customer_detail_component_1.CustomerDetailComponent],
                        providers: [customer_service_1.CustomerService],
                        bootstrap: [customer_index_component_1.CustomerIndexComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomerAppModule);
                return CustomerAppModule;
            }());
            exports_1("CustomerAppModule", CustomerAppModule);
        }
    }
});
//# sourceMappingURL=customer-index.module.js.map