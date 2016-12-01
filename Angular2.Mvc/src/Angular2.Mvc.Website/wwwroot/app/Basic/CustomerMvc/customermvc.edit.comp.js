System.register(['@angular/core', '@angular/router', '../../service/customer.service', '../../service/resturi.service'], function(exports_1, context_1) {
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
    var CustomerMvcEditComp;
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
            CustomerMvcEditComp = (function () {
                function CustomerMvcEditComp(elementRef, route, custService) {
                    this.elementRef = elementRef;
                    this.route = route;
                    this.custService = custService;
                }
                CustomerMvcEditComp.prototype.ngOnInit = function () {
                    var _this = this;
                    //Add event listner to dom
                    this.addEventListner();
                    //Get route parameter
                    this.route.params.subscribe(function (params) {
                        var custIdValue = params['id'];
                        var custId = +custIdValue; //Equales to parseInt
                        console.log("query id = " + +custIdValue);
                        _this.custService.get(custId).then(function (cust) {
                            _this.id = cust.Id;
                            _this.name = cust.Name;
                            _this.age = cust.Age;
                            _this.phone = cust.Phone;
                            _this.description = cust.Description;
                        });
                    });
                };
                CustomerMvcEditComp.prototype.addEventListner = function () {
                    var _this = this;
                    var el = this.elementRef.nativeElement.querySelector("#tipImg");
                    if (el) {
                        el.addEventListener('click', function (e) {
                            e.preventDefault();
                            _this.showTip();
                        });
                    }
                };
                CustomerMvcEditComp.prototype.showTip = function () {
                    swal('Tip', 'Required information : Name, Phone.').then(function () {
                    });
                };
                //Submit
                CustomerMvcEditComp.prototype.submit = function () {
                    document.getElementById("EditForm").submit();
                };
                CustomerMvcEditComp = __decorate([
                    core_1.Component({
                        selector: 'customermvc-edit',
                        providers: [customer_service_1.CustomerService, resturi_service_1.RestUriService],
                        //templateUrl: '/app/Basic/CustomerMvc/create.component.html'
                        templateUrl: '/Basic/CustomerMvc/Edit'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, router_1.ActivatedRoute, customer_service_1.CustomerService])
                ], CustomerMvcEditComp);
                return CustomerMvcEditComp;
            }());
            exports_1("CustomerMvcEditComp", CustomerMvcEditComp);
        }
    }
});
//# sourceMappingURL=customermvc.edit.comp.js.map