/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
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
    var ProductBooksComponent;
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
            ProductBooksComponent = (function () {
                function ProductBooksComponent(router, productService) {
                    this.router = router;
                    this.productService = productService;
                    this.title = "Books";
                    this.productService = productService;
                    JL("Angular2").debug("Come to BooksComponent!");
                }
                ProductBooksComponent.prototype.ngOnInit = function () {
                    this.initBooks();
                };
                //Initialize books
                ProductBooksComponent.prototype.initBooks = function () {
                    var _this = this;
                    this.productService.getBooks().then(function (data) {
                        _this.books = data;
                    });
                };
                //Go to edit page
                ProductBooksComponent.prototype.edit = function (prod) {
                    this.router.navigate(['Basic/Product/Edit', prod.Id]);
                };
                //Remove the product
                ProductBooksComponent.prototype.remove = function (prod) {
                    var service = this.productService;
                    var books = this.books;
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
                            var index = books.indexOf(prod);
                            books.splice(index, 1);
                        });
                    });
                };
                ProductBooksComponent = __decorate([
                    //SweetAlert2 typings definition
                    core_1.Component({
                        selector: 'product-books',
                        providers: [product_service_1.ProductService],
                        templateUrl: '/app/Basic/Product/product-books.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
                ], ProductBooksComponent);
                return ProductBooksComponent;
            }());
            exports_1("ProductBooksComponent", ProductBooksComponent);
        }
    }
});
//# sourceMappingURL=product-books.component.js.map