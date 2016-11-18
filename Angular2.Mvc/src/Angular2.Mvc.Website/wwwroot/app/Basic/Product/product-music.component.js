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
    var ProductMusicComponent;
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
            ProductMusicComponent = (function () {
                function ProductMusicComponent(router, productService) {
                    this.router = router;
                    this.productService = productService;
                    this.title = "Music";
                    this.productService = productService;
                }
                ProductMusicComponent.prototype.ngOnInit = function () {
                    this.initMusic();
                };
                //Initialize books
                ProductMusicComponent.prototype.initMusic = function () {
                    var _this = this;
                    this.productService.getMusic().then(function (data) {
                        _this.music = data;
                    });
                };
                ProductMusicComponent = __decorate([
                    //SweetAlert2 typings definition
                    core_1.Component({
                        selector: 'product-music',
                        providers: [product_service_1.ProductService],
                        templateUrl: '/app/Basic/Product/product-music.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
                ], ProductMusicComponent);
                return ProductMusicComponent;
            }());
            exports_1("ProductMusicComponent", ProductMusicComponent);
        }
    }
});
//# sourceMappingURL=product-music.component.js.map