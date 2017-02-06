System.register(["@angular/core", "@angular/router", "@ngrx/store", "./product.service", "ng2-toastr/ng2-toastr"], function (exports_1, context_1) {
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
    var core_1, router_1, store_1, product_service_1, ng2_toastr_1, ProductBooksComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            }
        ],
        execute: function () {
            ProductBooksComponent = (function () {
                function ProductBooksComponent(router, productService, store, toastr, vRef) {
                    this.router = router;
                    this.productService = productService;
                    this.store = store;
                    this.toastr = toastr;
                    this.vRef = vRef;
                    this.title = "Books";
                    this.itemNumbers = {};
                    this.toastr.setRootViewContainerRef(vRef);
                    this.productService = productService;
                    //Get the reducer
                    this.shopcart = store.select("shopcart");
                }
                ProductBooksComponent.prototype.ngOnInit = function () {
                    this.initBooks();
                    this.initToastrOptions();
                };
                //Initialize books
                ProductBooksComponent.prototype.initBooks = function () {
                    var _this = this;
                    this.productService.getBooks().then(function (data) {
                        _this.books = data;
                        //Use shopping cart to update data
                        _this.shopcart.subscribe(function (cart) {
                            _this.books.forEach(function (item) {
                                var storeItem = cart.items.find(function (x) { return x.id === item.Id; });
                                if (!storeItem) {
                                    _this.itemNumbers[item.Id] = 0;
                                }
                                else {
                                    _this.itemNumbers[item.Id] = storeItem.count;
                                }
                            });
                        });
                    });
                };
                //Set ng2-toastr options
                ProductBooksComponent.prototype.initToastrOptions = function () {
                    this.toastrOptions = new ng2_toastr_1.ToastOptions({
                        dismiss: 'auto',
                        animate: 'flyRight',
                        positionClass: 'toast-bottom-right',
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
                ProductBooksComponent.prototype.setShopCart = function (data) {
                    this.toastr.info(data.cnt + ' items, total $' + data.sum, 'Shopping Cart', this.toastrOptions);
                };
                return ProductBooksComponent;
            }());
            ProductBooksComponent = __decorate([
                core_1.Component({
                    selector: 'product-books',
                    templateUrl: '/app/component/Basic/Product/product-books.component.html'
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    product_service_1.ProductService,
                    store_1.Store,
                    ng2_toastr_1.ToastsManager,
                    core_1.ViewContainerRef])
            ], ProductBooksComponent);
            exports_1("ProductBooksComponent", ProductBooksComponent);
        }
    };
});
//# sourceMappingURL=product-books.component.js.map