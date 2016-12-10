System.register(['@angular/core', '@angular/router', '../../../service/customer.service', '../../../service/resturi.service'], function(exports_1, context_1) {
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
    var core_1, router_1, customer_service_1, resturi_service_1;
    var CustomerMvcListComp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            },
            function (resturi_service_1_1) {
                resturi_service_1 = resturi_service_1_1;
            }],
        execute: function() {
            CustomerMvcListComp = (function () {
                function CustomerMvcListComp(router, elementRef, custService) {
                    this.router = router;
                    this.elementRef = elementRef;
                    this.custService = custService;
                    JL("Angular2").debug("Come to list page!");
                }
                CustomerMvcListComp.prototype.ngOnInit = function () {
                    //Add event listner to dom
                    this.addEventListner();
                };
                CustomerMvcListComp.prototype.addEventListner = function () {
                    //let el = this.elementRef.nativeElement.querySelector("#tipImg");
                    //el.addEventListener('click', e => {
                    //    e.preventDefault();
                    //    this.showTip();
                    //});
                };
                //Get to edit page
                CustomerMvcListComp.prototype.goToCreate = function () {
                    this.router.navigate(['Basic/CustomerMvc/Create']);
                };
                //Get to edit page
                CustomerMvcListComp.prototype.editCustomer = function (id) {
                    this.router.navigate(['Basic/CustomerMvc/Edit', id]);
                    //this.router.navigate(['Basic/CustomerMvc/Edit', { 'id': id }]); //Use for more url parameter
                };
                //Remove customer
                CustomerMvcListComp.prototype.deleteCustomer = function (id) {
                    var service = this.custService;
                    var router = this.router;
                    swal({
                        title: 'Are you sure?',
                        text: "The customer will be deleted!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then(function () {
                        service.removeById(id).then(function () {
                            console.log("Redirect to Basic/CustomerMvc/Index");
                            //Refresh or just hide the front end removed-data
                            document.location.href = "Basic/CustomerMvc/Index";
                        });
                    });
                };
                CustomerMvcListComp = __decorate([
                    core_1.Component({
                        selector: 'customermvc-list',
                        providers: [customer_service_1.CustomerService, resturi_service_1.RestUriService],
                        templateUrl: '/Basic/CustomerMvc/List'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef, customer_service_1.CustomerService])
                ], CustomerMvcListComp);
                return CustomerMvcListComp;
            }());
            exports_1("CustomerMvcListComp", CustomerMvcListComp);
        }
    }
});
//# sourceMappingURL=customermvc.list.comp.js.map