System.register(["@angular/core", "@angular/forms", "@angular/platform-browser", "@angular/http", "./product.route", "angularfire2", "../../../class/FirebaseConfig", "./product.app.component", "./product-index.component", "./product-create.component", "./product-edit.component", "./product-sub.component", "./product-books.component", "./product-toys.component", "./product-music.component", "./product-booking.component", "./product.service", "@ngrx/store", "../../../service/counter.action", "../../../service/shopcart.action"], function (exports_1, context_1) {
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
    var core_1, forms_1, platform_browser_1, http_1, product_route_1, angularfire2_1, FirebaseConfig_1, product_app_component_1, product_index_component_1, product_create_component_1, product_edit_component_1, product_sub_component_1, product_books_component_1, product_toys_component_1, product_music_component_1, product_booking_component_1, product_service_1, store_1, counter_action_1, shopcart_action_1, rootReducer, ProductAppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (product_route_1_1) {
                product_route_1 = product_route_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            },
            function (FirebaseConfig_1_1) {
                FirebaseConfig_1 = FirebaseConfig_1_1;
            },
            function (product_app_component_1_1) {
                product_app_component_1 = product_app_component_1_1;
            },
            function (product_index_component_1_1) {
                product_index_component_1 = product_index_component_1_1;
            },
            function (product_create_component_1_1) {
                product_create_component_1 = product_create_component_1_1;
            },
            function (product_edit_component_1_1) {
                product_edit_component_1 = product_edit_component_1_1;
            },
            function (product_sub_component_1_1) {
                product_sub_component_1 = product_sub_component_1_1;
            },
            function (product_books_component_1_1) {
                product_books_component_1 = product_books_component_1_1;
            },
            function (product_toys_component_1_1) {
                product_toys_component_1 = product_toys_component_1_1;
            },
            function (product_music_component_1_1) {
                product_music_component_1 = product_music_component_1_1;
            },
            function (product_booking_component_1_1) {
                product_booking_component_1 = product_booking_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (counter_action_1_1) {
                counter_action_1 = counter_action_1_1;
            },
            function (shopcart_action_1_1) {
                shopcart_action_1 = shopcart_action_1_1;
            }
        ],
        execute: function () {
            rootReducer = {
                counter: counter_action_1.counterReducer,
                shopcart: shopcart_action_1.shopcartReducer
            };
            ProductAppModule = (function () {
                function ProductAppModule() {
                }
                return ProductAppModule;
            }());
            ProductAppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        product_route_1.ProductRoutes,
                        angularfire2_1.AngularFireModule.initializeApp(FirebaseConfig_1.FirebaseConfig.Get()),
                        store_1.StoreModule.provideStore(rootReducer)
                    ],
                    declarations: [
                        product_app_component_1.ProductAppComponent,
                        product_index_component_1.ProductIndexComponent,
                        product_create_component_1.ProductCreateComponent,
                        product_edit_component_1.ProductEditComponent,
                        product_sub_component_1.ProductSubComponent,
                        product_books_component_1.ProductBooksComponent,
                        product_toys_component_1.ProductToysComponent,
                        product_music_component_1.ProductMusicComponent,
                        product_booking_component_1.ProductBookingComponent
                    ],
                    providers: [
                        product_service_1.ProductService
                    ],
                    bootstrap: [product_app_component_1.ProductAppComponent]
                }),
                __metadata("design:paramtypes", [])
            ], ProductAppModule);
            exports_1("ProductAppModule", ProductAppModule);
        }
    };
});
//# sourceMappingURL=product.app.module.js.map