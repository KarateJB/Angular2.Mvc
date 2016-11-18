System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var ProductSubComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProductSubComponent = (function () {
                function ProductSubComponent(router) {
                    this.router = router;
                }
                ProductSubComponent.prototype.goToBooks = function () {
                    this.router.navigate(['Basic/Product/Sub', 'Books']);
                };
                ProductSubComponent.prototype.goToToys = function () {
                    this.router.navigate(['Basic/Product/Sub', 'Toys']);
                };
                ProductSubComponent.prototype.goToMusic = function () {
                    this.router.navigate(['Basic/Product/Sub', 'Music']);
                };
                ProductSubComponent = __decorate([
                    core_1.Component({
                        selector: 'product-sub',
                        providers: [],
                        template: '<div class="btn-group" role= "group" aria-label="Basic example">' +
                            '<button type="button" class="btn btn-secondary" (click)="goToBooks()">Books</button>' +
                            '<button type="button" class="btn btn-secondary" (click)="goToToys()">Toys</button>' +
                            '<button type="button" class="btn btn-secondary" (click)="goToMusic()">Music</button>' +
                            '</div>' +
                            '<router-outlet></router-outlet>'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ProductSubComponent);
                return ProductSubComponent;
            }());
            exports_1("ProductSubComponent", ProductSubComponent);
        }
    }
});
//# sourceMappingURL=product-sub.component.js.map