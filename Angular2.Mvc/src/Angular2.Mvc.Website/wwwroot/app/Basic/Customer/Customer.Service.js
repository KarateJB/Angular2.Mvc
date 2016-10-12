System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var CustomerService, customers;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CustomerService = (function () {
                function CustomerService() {
                }
                CustomerService.prototype.getAll = function () {
                    return new Promise(function (resolve) { return setTimeout(function () { return resolve(customers); }, 1000); });
                };
                CustomerService.prototype.create = function (item) {
                };
                CustomerService.prototype.update = function (item) {
                };
                CustomerService.prototype.delete = function (item) {
                };
                CustomerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CustomerService);
                return CustomerService;
            }());
            exports_1("CustomerService", CustomerService);
            customers = [{ "Id": 1, "Name": "<b>JB</b>", "Phone": "0933XXXXXX", "Age": 35 },
                { "Id": 2, "Name": "<b>Lily</b>", "Phone": "0910XXXXXX", "Age": 18 },
                { "Id": 3, "Name": "<b>Leia</b>", "Phone": "N/A", "Age": 3 },
                { "Id": 4, "Name": "<b>Darth vader</b>", "Phone": "02-1234567", "Age": 28 },
                { "Id": 5, "Name": "<b>Hachi</b>", "Phone": "N/A", "Age": 6 },
                { "Id": 6, "Name": "<b>Luke Skywalker</b>", "Phone": "02-5678901", "Age": 10 },
                { "Id": 7, "Name": "<b>Anakin Skywalker</b>", "Phone": "0988ZZZZZZ", "Age": 13 },
                { "Id": 8, "Name": "<b>Obi wan</b>", "Phone": "0912YYYYYY", "Age": 65 }];
        }
    }
});
//# sourceMappingURL=Customer.Service.js.map