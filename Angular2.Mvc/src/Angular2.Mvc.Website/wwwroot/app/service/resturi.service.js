System.register(['@angular/core'], function(exports_1, context_1) {
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
    var RestUriService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RestUriService = (function () {
                function RestUriService() {
                    this.REST_ROOT_URL = "http://localhost:7856/";
                    this.WEB_ROOT_URL = "http://localhost:4240/";
                    //Customer
                    this.customerGetAllUri = this.REST_ROOT_URL.concat("api/Basic/Customer/GetAll/");
                    this.customerGetUri = this.REST_ROOT_URL.concat("api/Basic/Customer/Get/");
                    this.customerCreateUri = this.REST_ROOT_URL.concat("api/Basic/Customer/Create/");
                    this.customerUpdateUri = this.REST_ROOT_URL.concat("api/Basic/Customer/Update/");
                    this.customerRemoveUri = this.REST_ROOT_URL.concat("api/Basic/Customer/Remove/");
                    //CustomerMvc
                    this.customerMvcCreateUri = this.WEB_ROOT_URL.concat("Basic/CustomerMvc/QueryCreateView/");
                }
                RestUriService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RestUriService);
                return RestUriService;
            }());
            exports_1("RestUriService", RestUriService);
        }
    }
});
//# sourceMappingURL=resturi.service.js.map