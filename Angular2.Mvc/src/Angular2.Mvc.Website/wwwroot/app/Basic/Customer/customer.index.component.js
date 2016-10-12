System.register(['angular2/core', './Customer.Service', './customer.detail.component'], function(exports_1, context_1) {
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
    var core_1, Customer_Service_1, customer_detail_component_1;
    var CustomerIndexComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Customer_Service_1_1) {
                Customer_Service_1 = Customer_Service_1_1;
            },
            function (customer_detail_component_1_1) {
                customer_detail_component_1 = customer_detail_component_1_1;
            }],
        execute: function() {
            CustomerIndexComponent = (function () {
                function CustomerIndexComponent(custService) {
                    this.custService = custService;
                    this.title = "Customers";
                }
                CustomerIndexComponent.prototype.ngOnInit = function () {
                    this.initCustomers();
                };
                CustomerIndexComponent.prototype.initCustomers = function () {
                    var _this = this;
                    this.custService.getAll().then(function (data) { return _this.data = data; }); //非同步 & delay for 2 sec
                };
                //Get to edit page
                CustomerIndexComponent.prototype.editCustomer = function (item) {
                };
                //Remove customer
                CustomerIndexComponent.prototype.deleteCustomer = function (item) {
                    //Remove item
                    var index = this.data.indexOf(item);
                    this.data.splice(index, 1);
                };
                //Show details of the customer
                CustomerIndexComponent.prototype.showDetail = function (cust) {
                    this.selectedCustomer = cust;
                };
                //Back to list (Show list)
                CustomerIndexComponent.prototype.backToList = function () {
                    this.selectedCustomer = null;
                };
                CustomerIndexComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-index',
                        providers: [Customer_Service_1.CustomerService],
                        templateUrl: '/app/Basic/Customer/customer.index.component.html',
                        styleUrls: ['/app/Basic/Customer/customer.index.component.css'],
                        directives: [customer_detail_component_1.CustomerDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [Customer_Service_1.CustomerService])
                ], CustomerIndexComponent);
                return CustomerIndexComponent;
            }());
            exports_1("CustomerIndexComponent", CustomerIndexComponent);
        }
    }
});
//# sourceMappingURL=customer.index.component.js.map