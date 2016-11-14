System.register(['@angular/core', '@angular/router', './product.service', '../../class/Product'], function(exports_1, context_1) {
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
    var core_1, router_1, product_service_1, Product_1;
    var ProductCreateComponent;
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
            },
            function (Product_1_1) {
                Product_1 = Product_1_1;
            }],
        execute: function() {
            ProductCreateComponent = (function () {
                function ProductCreateComponent(router, prodService) {
                    this.router = router;
                    this.prodService = prodService;
                    this.title = "Products - Create";
                    this.prod = new Product_1.Product();
                }
                ProductCreateComponent.prototype.ngOnInit = function () {
                };
                //Save!
                ProductCreateComponent.prototype.save = function () {
                    var _this = this;
                    this.prodService.create(this.prod).then(function () {
                        var rt = _this.router;
                        swal('Success!', 'The data has been saved.', 'success').then(function () {
                            //Return to Index
                            rt.navigate(['Basic/Product/Index']);
                        });
                    });
                };
                //Back to list (Show list)
                ProductCreateComponent.prototype.backToList = function () {
                    this.router.navigate(['Basic/Product/Index']);
                };
                ProductCreateComponent = __decorate([
                    //SweetAlert2 typings definition
                    core_1.Component({
                        selector: 'product-create',
                        providers: [product_service_1.ProductService],
                        templateUrl: '/app/Basic/Product/product-create.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
                ], ProductCreateComponent);
                return ProductCreateComponent;
            }());
            exports_1("ProductCreateComponent", ProductCreateComponent);
        }
    }
});
//# sourceMappingURL=product-create.component.js.map