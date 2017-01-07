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
    var core_1, router_1, product_service_1, ProductBookingComponent;
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
            ProductBookingComponent = (function () {
                function ProductBookingComponent(router, productService) {
                    this.router = router;
                    this.productService = productService;
                    this.productService = productService;
                }
                ProductBookingComponent.prototype.ngOnInit = function () {
                };
                return ProductBookingComponent;
            }());
            ProductBookingComponent = __decorate([
                core_1.Component({
                    selector: 'product-booking',
                    template: "\n               <table>\n                 <tr>\n                   <td style=\"min-width:25px\"><i class=\"fa fa-minus\"></i></td>\n                   <td style=\"max-width:50px\"><input type=\"text\" value=\"0\" /></td>\n                   <td style=\"max-width:25px\"><i class=\"fa fa-plus\"></i></td>\n                 </tr>\n               </table>\n              "
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    product_service_1.ProductService])
            ], ProductBookingComponent);
            exports_1("ProductBookingComponent", ProductBookingComponent);
        }
    };
});
//# sourceMappingURL=product-booking.component.js.map