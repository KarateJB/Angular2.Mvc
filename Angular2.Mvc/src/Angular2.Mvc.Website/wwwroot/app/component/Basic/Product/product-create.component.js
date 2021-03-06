System.register(["@angular/core", "@angular/router", "./product.service", "../../../class/Product", "../../../enum/ProductTypeEnum"], function (exports_1, context_1) {
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
    var core_1, router_1, product_service_1, Product_1, ProductTypeEnum_1, ProductCreateComponent;
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
            },
            function (Product_1_1) {
                Product_1 = Product_1_1;
            },
            function (ProductTypeEnum_1_1) {
                ProductTypeEnum_1 = ProductTypeEnum_1_1;
            }
        ],
        execute: function () {
            ProductCreateComponent = (function () {
                function ProductCreateComponent(router, prodService) {
                    this.router = router;
                    this.prodService = prodService;
                    this.title = "Products - Create";
                    this.prodHint = "";
                    this.prod = new Product_1.Product();
                    this.prodTypes = this.prodService.getProductTypes();
                }
                ProductCreateComponent.prototype.ngOnInit = function () {
                };
                //Change Selected Product type callback
                ProductCreateComponent.prototype.changeSelectedType = function (event) {
                    console.log(event); //Show the selected option 
                    switch (event.id) {
                        case ProductTypeEnum_1.ProductTypeEnum.Book.toString():
                            this.prodHint = "Enter a book's title..";
                            break;
                        case ProductTypeEnum_1.ProductTypeEnum.Toy.toString():
                            this.prodHint = "Enter a toy's name..";
                            break;
                        case ProductTypeEnum_1.ProductTypeEnum.Music.toString():
                            this.prodHint = "Enter music..";
                            break;
                        default:
                            this.prodHint = "";
                            break;
                    }
                };
                //Save!
                ProductCreateComponent.prototype.save = function () {
                    var _this = this;
                    this.prod.TypeId = this.selectedProdType.id;
                    this.prod.Type = this.selectedProdType.name;
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
                return ProductCreateComponent;
            }());
            ProductCreateComponent = __decorate([
                core_1.Component({
                    selector: 'product-create',
                    providers: [product_service_1.ProductService],
                    templateUrl: '/app/component/Basic/Product/product-create.component.html'
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    product_service_1.ProductService])
            ], ProductCreateComponent);
            exports_1("ProductCreateComponent", ProductCreateComponent);
        }
    };
});
//# sourceMappingURL=product-create.component.js.map