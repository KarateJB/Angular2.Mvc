System.register(["@angular/core", "@angular/router", "./product.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, product_service_1, ProductToysComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }
        ],
        execute: function () {
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
                //Go to edit page
                ProductToysComponent.prototype.edit = function (prod) {
                    this.router.navigate(['Basic/Product/Edit', prod.Id]);
                };
                //Remove the product
                ProductToysComponent.prototype.remove = function (prod) {
                    var service = this.productService;
                    var toys = this.toys;
                    swal({
                        title: 'Are you sure?',
                        text: "The product : " + prod.Title + ", will be deleted!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then(function () {
                        service.remove(prod).then(function () {
                            //Remove item in Front-end
                            var index = toys.indexOf(prod);
                            toys.splice(index, 1);
                        });
                    });
                };
                return ProductToysComponent;
            }());
            ProductToysComponent = __decorate([
                core_1.Component({
                    selector: 'product-toys',
                    templateUrl: '/app/component/Basic/Product/product-toys.component.html'
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    product_service_1.ProductService])
            ], ProductToysComponent);
            exports_1("ProductToysComponent", ProductToysComponent);
        }
    };
});
//# sourceMappingURL=product-toys.component.js.map