System.register(['@angular/core', '@angular/http', '../../service/resturi.service'], function(exports_1, context_1) {
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
    var CustomerMvcService;
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
            CustomerMvcService = (function () {
                function CustomerMvcService(http, resturiService) {
                    this.http = http;
                    this.resturiService = resturiService;
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.httpOptions = new http_1.RequestOptions({ headers: headers });
                }
                //Get all customers
                CustomerMvcService.prototype.queryCustomerView = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this.http.get(_this.resturiService.customerMvcCreateUri)
                            .subscribe(function (value) {
                            resolve(value.text());
                        });
                    });
                };
                CustomerMvcService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, resturi_service_1.RestUriService])
                ], CustomerMvcService);
                return CustomerMvcService;
            }());
            exports_1("CustomerMvcService", CustomerMvcService);
        }
    }
});
//# sourceMappingURL=customermvc.service.js.map