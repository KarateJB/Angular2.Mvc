System.register(['@angular/core', '@angular/router', './product.service', '../../../class/Product'], function(exports_1, context_1) {
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
    var ProductEditComponent;
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
            ProductEditComponent = (function () {
                function ProductEditComponent(router, route, prodService) {
                    this.router = router;
                    this.route = route;
                    this.prodService = prodService;
                    this.title = "Products - Edit";
                    this.prod = new Product_1.Product();
                    this.prodTypes = this.prodService.getProductTypes();
                }
                ProductEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (params) {
                        var prodId = params['id'];
                        _this.prodService.get(prodId).then(function (data) {
                            _this.prod = data;
                            _this.prodTypes.forEach(function (type) {
                                if (type.id == _this.prod.TypeId) {
                                    console.log('matched type is ' + type.name);
                                    _this.selectedProdType = type;
                                }
                            });
                        });
                    });
                };
                //Save!
                ProductEditComponent.prototype.save = function () {
                    this.prod.TypeId = this.selectedProdType.id;
                    this.prod.Type = this.selectedProdType.name;
                    this.prodService.update(this.prod).then(function () {
                        swal('Success!', 'The data has been saved.', 'success').then(function () {
                            //Return to Index
                            //rt.navigate(['Basic/Product/Index']);
                        });
                    });
                };
                //Back to list (Show list)
                ProductEditComponent.prototype.backToList = function () {
                    this.router.navigate(['Basic/Product/Index']);
                };
                ProductEditComponent = __decorate([
                    //SweetAlert2 typings definition
                    core_1.Component({
                        selector: 'product-edit',
                        providers: [product_service_1.ProductService],
                        templateUrl: '/app/component/Basic/Product/product-edit.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, product_service_1.ProductService])
                ], ProductEditComponent);
                return ProductEditComponent;
            }());
            exports_1("ProductEditComponent", ProductEditComponent);
        }
    }
});
//# sourceMappingURL=product-edit.component.js.map