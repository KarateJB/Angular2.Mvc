System.register(["@angular/core", "@angular/router", "./product.service", "ng2-toastr/ng2-toastr", "@ngrx/store", "../../../service/counter.action"], function (exports_1, context_1) {
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
    var core_1, router_1, product_service_1, ng2_toastr_1, store_1, counter_action_1, ProductToysComponent;
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
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (counter_action_1_1) {
                counter_action_1 = counter_action_1_1;
            }
        ],
        execute: function () {
            ProductToysComponent = (function () {
                function ProductToysComponent(router, productService, toastr, vRef, store) {
                    this.router = router;
                    this.productService = productService;
                    this.toastr = toastr;
                    this.vRef = vRef;
                    this.store = store;
                    this.title = "Toys";
                    this.toastr.setRootViewContainerRef(vRef);
                    this.productService = productService;
                    JL("Angular2").debug("Come to ToysComponent!");
                    this.counter = store.select("counter");
                }
                ProductToysComponent.prototype.ngOnInit = function () {
                    this.initToys();
                    this.initToastrOptions();
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
                //Set ng2-toastr options
                ProductToysComponent.prototype.initToastrOptions = function () {
                    this.toastrOptions = new ng2_toastr_1.ToastOptions({
                        dismiss: 'auto',
                        animate: 'flyRight',
                        positionClass: 'toast-bottom-right',
                    });
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
                ProductToysComponent.prototype.setShopCart = function (data) {
                    this.toastr.info(data.cnt + ' items, total $' + data.sum, 'Shopping Cart', this.toastrOptions);
                };
                ProductToysComponent.prototype.increment = function () {
                    this.store.dispatch({ type: counter_action_1.INCREMENT });
                };
                ProductToysComponent.prototype.decrement = function () {
                    this.store.dispatch({ type: counter_action_1.DECREMENT });
                };
                return ProductToysComponent;
            }());
            ProductToysComponent = __decorate([
                core_1.Component({
                    selector: 'product-toys',
                    templateUrl: '/app/component/Basic/Product/product-toys.component.html'
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    product_service_1.ProductService,
                    ng2_toastr_1.ToastsManager,
                    core_1.ViewContainerRef,
                    store_1.Store])
            ], ProductToysComponent);
            exports_1("ProductToysComponent", ProductToysComponent);
        }
    };
});
//# sourceMappingURL=product-toys.component.js.map