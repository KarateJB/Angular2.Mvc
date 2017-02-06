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
    var core_1, router_1, store_1, ShopcartComponent;
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
            ShopcartComponent = (function () {
                function ShopcartComponent(router, store) {
                    this.router = router;
                    this.store = store;
                    //Get the reducer
                    this.shopcart = store.select("shopcart");
                    this.shopcart.subscribe(function (data) {
                        console.log(data.items);
                    });
                }
                ShopcartComponent.prototype.ngOnInit = function () {
                };
                ShopcartComponent.prototype.goToProducts = function () {
                    this.router.navigate(['Basic/Product/Index']);
                };
                return ShopcartComponent;
            }());
            ShopcartComponent = __decorate([
                core_1.Component({
                    selector: 'shop-cart',
                    providers: [],
                    template: " \n                   <div><button class=\"btn btn-default\" (click)=\"goToProducts()\"><i class=\"fa fa-ra\"></i> Back </button></div>\n                   <div>\n                   <table class=\"table table-inverse\">\n                     <thead>\n                        <tr>\n                            <th>Product</th>\n                            <th>Number</th>\n                            <th>Price/per</th>\n                            <th>Total Price</th>\n                        </tr>\n                     </thead>\n                     <tbody>\n                        <tr *ngFor=\"let item of (shopcart | async)?.items\">\n                          <td>{{item.title}}</td>\n                          <td>{{item.count}}</td>\n                          <td>{{item.price}}</td>\n                          <td>{{item.count * item.price}}</td>\n                        </tr>\n                     </tbody>\n                   </table>\n                   </div>\n                 "
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    store_1.Store])
            ], ShopcartComponent);
            exports_1("ShopcartComponent", ShopcartComponent);
        }
    };
});
//# sourceMappingURL=shopcart.component.js.map