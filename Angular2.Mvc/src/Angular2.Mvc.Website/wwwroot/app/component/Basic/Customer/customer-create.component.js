System.register(['@angular/core', '@angular/router', '../../../class/Customer', '../../../service/customer.service', '../../../service/resturi.service'], function(exports_1, context_1) {
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
    var core_1, router_1, Customer_1, customer_service_1, resturi_service_1;
    var CustomerCreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Customer_1_1) {
                Customer_1 = Customer_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            },
            function (resturi_service_1_1) {
                resturi_service_1 = resturi_service_1_1;
            }],
        execute: function() {
            CustomerCreateComponent = (function () {
                function CustomerCreateComponent(router, custService) {
                    this.router = router;
                    this.custService = custService;
                    this.title = "Customer - Create";
                    this.customer = new Customer_1.Customer();
                }
                CustomerCreateComponent.prototype.ngOnInit = function () {
                };
                //Save!
                CustomerCreateComponent.prototype.save = function () {
                    var _this = this;
                    JL("Angular2").debug("Saving a customer!");
                    this.custService.create(this.customer).then(function () {
                        var rt = _this.router;
                        swal('Success!', 'The data has been saved.', 'success').then(function () {
                            //Return to Index
                            rt.navigate(['Basic/Customer/Index']);
                        });
                    });
                };
                //Back to list
                CustomerCreateComponent.prototype.backToList = function () {
                    this.router.navigate(['Basic/Customer/Index']);
                };
                CustomerCreateComponent = __decorate([
                    core_1.Pipe({
                        name: 'sanitizeHtml',
                        pure: true //Default is true
                    }),
                    core_1.Component({
                        selector: 'customer-create',
                        providers: [customer_service_1.CustomerService, resturi_service_1.RestUriService],
                        templateUrl: '/app/component/Basic/Customer/customer-create.component.html',
                        styleUrls: ['/app/component/Basic/Customer/customer-create.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, customer_service_1.CustomerService])
                ], CustomerCreateComponent);
                return CustomerCreateComponent;
            }());
            exports_1("CustomerCreateComponent", CustomerCreateComponent);
        }
    }
});
//# sourceMappingURL=customer-create.component.js.map