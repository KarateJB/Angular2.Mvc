System.register(['@angular/core', '@angular/router', './product.service'], function(exports_1, context_1) {
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
    var core_1, router_1, product_service_1;
    var ProductToysComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            ProductToysComponent = (function () {
                function ProductToysComponent(router, productService) {
                    this.router = router;
                    this.productService = productService;
                    this.title = "Toys";
                    this.productService = productService;
                }
                ProductToysComponent.prototype.ngOnInit = function () {
                    this.initToys();
                };
                //Initialize books
                ProductToysComponent.prototype.initToys = function () {
                    var _this = this;
                    this.productService.getToys().then(function (data) {
                        _this.toys = data;
                    });
                };
                ProductToysComponent = __decorate([
                    //SweetAlert2 typings definition
                    core_1.Component({
                        selector: 'product-toys',
                        providers: [product_service_1.ProductService],
                        templateUrl: '/app/Basic/Product/product-toys.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
                ], ProductToysComponent);
                return ProductToysComponent;
            }());
            exports_1("ProductToysComponent", ProductToysComponent);
        }
    }
});
//# sourceMappingURL=product-toys.component.js.map