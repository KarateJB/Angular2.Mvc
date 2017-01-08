System.register(["@angular/core", "@ngrx/store", "@angular/router", "./product.service", "../../../service/shopcart.action", "../../../class/ShopItem"], function (exports_1, context_1) {
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
    var core_1, store_1, router_1, product_service_1, shopcart_action_1, ShopItem_1, ProductBookingComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (shopcart_action_1_1) {
                shopcart_action_1 = shopcart_action_1_1;
            },
            function (ShopItem_1_1) {
                ShopItem_1 = ShopItem_1_1;
            }
        ],
        execute: function () {
            ProductBookingComponent = (function () {
                function ProductBookingComponent(router, productService, store) {
                    this.router = router;
                    this.productService = productService;
                    this.store = store;
                    this.emitEvents = new core_1.EventEmitter(true); //Must set the EventEmitter to async
                    this.counter = 0;
                    this.shopItem = null;
                    this.productService = productService;
                    this.shopItem = new ShopItem_1.ShopItem({ 'count': 0, 'price': this.price });
                    this.shopcart = store.select("shopcart");
                }
                ProductBookingComponent.prototype.ngOnChanges = function () {
                    this.shopItem.price = this.price;
                    console.log(this.shopItem);
                };
                ProductBookingComponent.prototype.increment = function () {
                    var _this = this;
                    this.shopItem.count += 1;
                    this.store.dispatch({ type: shopcart_action_1.PUSH, payload: this.shopItem });
                    this.shopcart.subscribe(function (data) {
                        _this.emitEvents.emit(data);
                    });
                };
                ProductBookingComponent.prototype.decrement = function () {
                    var _this = this;
                    this.shopItem.count -= 1;
                    this.store.dispatch({ type: shopcart_action_1.PULL, payload: this.shopItem });
                    this.shopcart.subscribe(function (data) {
                        _this.emitEvents.emit(data);
                    });
                };
                ProductBookingComponent.prototype.reset = function () {
                    var _this = this;
                    this.shopItem.count = 0;
                    this.store.dispatch({ type: shopcart_action_1.CLEAR });
                    this.shopcart.subscribe(function (data) {
                        _this.emitEvents.emit(data);
                    });
                };
                ProductBookingComponent.prototype.ngOnInit = function () {
                };
                return ProductBookingComponent;
            }());
            __decorate([
                core_1.Input('price'),
                __metadata("design:type", Number)
            ], ProductBookingComponent.prototype, "price", void 0);
            __decorate([
                core_1.Output('emit-events'),
                __metadata("design:type", Object)
            ], ProductBookingComponent.prototype, "emitEvents", void 0);
            ProductBookingComponent = __decorate([
                core_1.Component({
                    selector: 'product-booking',
                    template: "\n               <table>\n                 <tr>\n                   <td (click)=\"decrement()\"><label style=\"min-width:25px\"><i class=\"fa fa-minus\"></i></label></td>\n                   <td><input style=\"max-width:50px\" readonly=\"readonly\" type=\"text\" value=\"{{shopItem.count}}\"/></td>\n                   <td (click)=\"increment()\"><label style=\"min-width:25px\"><i class=\"fa fa-plus\"></i></label></td>\n                 </tr>\n               </table>\n              "
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    product_service_1.ProductService,
                    store_1.Store])
            ], ProductBookingComponent);
            exports_1("ProductBookingComponent", ProductBookingComponent);
        }
    };
});
//# sourceMappingURL=product-booking.component.js.map