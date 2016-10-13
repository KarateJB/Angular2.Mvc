System.register(['angular2/core', 'angular2/router', 'angular2/common', './Customer.Service', './customer-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, Customer_Service_1, customer_detail_component_1;
    var WrapEvent, CustomerIndexComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Customer_Service_1_1) {
                Customer_Service_1 = Customer_Service_1_1;
            },
            function (customer_detail_component_1_1) {
                customer_detail_component_1 = customer_detail_component_1_1;
            }],
        execute: function() {
            WrapEvent = (function () {
                function WrapEvent() {
                }
                WrapEvent.prototype.transform = function (content) {
                    //Remove html tags
                    var msg = content.Msg;
                    var rex = /(<([^>]+)>)/ig;
                    msg = msg.replace(rex, "");
                    //Convert date to string
                    var datePipe = new common_1.DatePipe();
                    var createOn = datePipe.transform(content.CreateOn, 'yyyy/MM/dd HH:mm');
                    var title = content.Title;
                    var createBy = content.CreateBy;
                    return createOn.concat(' [', title, '] ', createBy, ' : ', msg);
                };
                WrapEvent = __decorate([
                    //SweetAlert2 typings definition
                    core_1.Pipe({
                        name: 'wrapEvent'
                    }), 
                    __metadata('design:paramtypes', [])
                ], WrapEvent);
                return WrapEvent;
            }());
            CustomerIndexComponent = (function () {
                function CustomerIndexComponent(router, custService) {
                    this.router = router;
                    this.custService = custService;
                    this.title = "Customers";
                }
                CustomerIndexComponent.prototype.ngOnInit = function () {
                    this.initCustomers();
                };
                CustomerIndexComponent.prototype.initCustomers = function () {
                    var _this = this;
                    this.custService.getAll().then(function (data) { return _this.customers = data; }); //非同步 & delay for 2 sec
                };
                //Search when [Enter] is keyup
                CustomerIndexComponent.prototype.search = function (searchKeyword) {
                    var _this = this;
                    if (searchKeyword.length > 0) {
                        var filteredCusts = this.custService.search(searchKeyword);
                        this.customers = filteredCusts;
                    }
                    else {
                        this.custService.getAll().then(function (data) { return _this.customers = data; }); //非同步 & delay for 2 sec
                    }
                };
                //Go to create page
                CustomerIndexComponent.prototype.goToCreate = function () {
                    this.router.navigate(['Create']);
                };
                //Get to edit page
                CustomerIndexComponent.prototype.editCustomer = function (item) {
                    this.router.navigate(['Edit', { id: item.Id }]);
                };
                //Remove customer
                CustomerIndexComponent.prototype.deleteCustomer = function (item) {
                    var customers = this.customers;
                    swal({
                        title: 'Are you sure?',
                        text: "The customer : " + item.Name + ", will be deleted!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then(function () {
                        //Remove item
                        var index = customers.indexOf(item);
                        customers.splice(index, 1);
                    });
                };
                //Show details of the customer
                CustomerIndexComponent.prototype.showDetail = function (cust) {
                    this.selectedCustomer = cust;
                };
                //Back to list (Show list)
                CustomerIndexComponent.prototype.backToList = function () {
                    this.selectedCustomer = null;
                };
                //Set the emit event data from chile component to local variable
                CustomerIndexComponent.prototype.setSysEvents = function (data) {
                    console.log(data);
                    this.events = data;
                };
                CustomerIndexComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-index',
                        providers: [Customer_Service_1.CustomerService],
                        //providers: [ROUTER_PROVIDERS, CustomerService],
                        templateUrl: '/app/Basic/Customer/customer-index.component.html',
                        styleUrls: ['/app/Basic/Customer/customer-index.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, customer_detail_component_1.CustomerDetailComponent],
                        pipes: [WrapEvent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, Customer_Service_1.CustomerService])
                ], CustomerIndexComponent);
                return CustomerIndexComponent;
            }());
            exports_1("CustomerIndexComponent", CustomerIndexComponent);
        }
    }
});
//# sourceMappingURL=customer-index.component.js.map