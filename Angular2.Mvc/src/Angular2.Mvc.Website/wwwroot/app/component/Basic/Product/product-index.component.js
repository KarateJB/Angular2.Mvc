System.register(["@angular/core", "@angular/router", "@ngrx/store"], function (exports_1, context_1) {
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
    var core_1, router_1, store_1, ProductIndexComponent;
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
            }
        ],
        execute: function () {
            ProductIndexComponent = (function () {
                function ProductIndexComponent(router, store) {
                    this.router = router;
                    this.store = store;
                    this.title = "Products";
                    this.counter = store.select("counter");
                }
                ProductIndexComponent.prototype.ngOnInit = function () {
                };
                ProductIndexComponent.prototype.goToCreate = function () {
                    //JL("Angular2").debug("Redirect to create page");
                    this.router.navigate(['Basic/Product/Create']);
                };
                return ProductIndexComponent;
            }());
            ProductIndexComponent = __decorate([
                core_1.Component({
                    selector: 'product-index',
                    providers: [],
                    templateUrl: '/app/component/Basic/Product/product-index.component.html'
                    //styleUrls: ['/app/component/Basic/Product/Product-index.component.css']
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    store_1.Store])
            ], ProductIndexComponent);
            exports_1("ProductIndexComponent", ProductIndexComponent);
        }
    };
});
//# sourceMappingURL=product-index.component.js.map