System.register(['@angular/core', '@angular/http', './resturi.service'], function(exports_1, context_1) {
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
    var core_1, http_1, resturi_service_1;
    var CustomerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (resturi_service_1_1) {
                resturi_service_1 = resturi_service_1_1;
            }],
        execute: function() {
            CustomerService = (function () {
                function CustomerService(http, resturiService) {
                    this.http = http;
                    this.resturiService = resturiService;
                    this.customers = [];
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.httpOptions = new http_1.RequestOptions({ headers: headers });
                }
                //Get all customers
                CustomerService.prototype.getAll = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        //resolve(CUSTOMERS);
                        _this.http.get(_this.resturiService.customerGetAllUri)
                            .subscribe(function (value) {
                            Object.assign(_this.customers, value.json());
                            resolve(value.json());
                        });
                    });
                };
                CustomerService.prototype.get = function (id) {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this.http.get(_this.resturiService.customerGetUri.concat(id.toString()))
                            .subscribe(function (value) {
                            console.log(value);
                            resolve(value.json());
                        });
                    });
                };
                CustomerService.prototype.search = function (keyword) {
                    var rtn = new Array();
                    for (var i = 0; i < this.customers.length; i++) {
                        var cust = this.customers[i];
                        if (cust.Name.indexOf(keyword) > 0) {
                            rtn.push(cust);
                        }
                    }
                    console.log(rtn);
                    //var custs = customers.find(x => x.Name.indexOf(keyword) > 0);
                    return rtn;
                };
                CustomerService.prototype.create = function (item) {
                    var _this = this;
                    var entity = JSON.stringify(item);
                    return new Promise(function (resolve) {
                        _this.http.post(_this.resturiService.customerCreateUri, entity, _this.httpOptions)
                            .subscribe(function () {
                            resolve();
                        });
                    });
                };
                CustomerService.prototype.update = function (item) {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this.http.put(_this.resturiService.customerUpdateUri, item, _this.httpOptions)
                            .subscribe(function (value) {
                            resolve();
                        });
                    });
                };
                CustomerService.prototype.remove = function (item) {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this.http.delete(_this.resturiService.customerRemoveUri.concat(item.Id.toString()))
                            .subscribe(function (value) {
                            resolve();
                        });
                    });
                };
                CustomerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, resturi_service_1.RestUriService])
                ], CustomerService);
                return CustomerService;
            }());
            exports_1("CustomerService", CustomerService);
        }
    }
});
//const CUSTOMERS: Customer[] =
//    [{ "Id": 1, "Name": "<b>JB</b>", "Phone": "0933XXXXXX", "Age": 35 },
//        { "Id": 2, "Name": "<b>Lily</b>", "Phone": "0910XXXXXX", "Age": 18 },
//        { "Id": 3, "Name": "<b>Leia</b>", "Phone": "N/A", "Age": 3 },
//        { "Id": 4, "Name": "<b>Darth vader</b>", "Phone": "02-1234567", "Age": 28 },
//        { "Id": 5, "Name": "<b>Hachi</b>", "Phone": "N/A", "Age": 6 },
//        { "Id": 6, "Name": "<b>Luke Skywalker</b>", "Phone": "02-5678901", "Age": 10 },
//        { "Id": 7, "Name": "<b>Anakin Skywalker</b>", "Phone": "0988ZZZZZZ", "Age": 13 },
//        { "Id": 8, "Name": "<b>Obi wan</b>", "Phone": "0912YYYYYY", "Age": 65 }];
//# sourceMappingURL=customer.service.js.map