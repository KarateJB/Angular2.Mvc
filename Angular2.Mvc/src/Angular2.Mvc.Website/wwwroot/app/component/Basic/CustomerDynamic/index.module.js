System.register(["@angular/core", "@angular/forms", "@angular/platform-browser", "@angular/http", "./index.component", "./list.component", "./card.component", "../../../directive/component-outlet.directive"], function (exports_1, context_1) {
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
    var core_1, forms_1, platform_browser_1, http_1, index_component_1, list_component_1, card_component_1, component_outlet_directive_1, CustomerDynamicIndexModule;
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
            function (index_component_1_1) {
                index_component_1 = index_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (card_component_1_1) {
                card_component_1 = card_component_1_1;
            },
            function (component_outlet_directive_1_1) {
                component_outlet_directive_1 = component_outlet_directive_1_1;
            }
        ],
        execute: function () {
            CustomerDynamicIndexModule = (function () {
                function CustomerDynamicIndexModule() {
                }
                return CustomerDynamicIndexModule;
            }());
            CustomerDynamicIndexModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                    ],
                    declarations: [index_component_1.CustomerDynamicIndexComponent, list_component_1.CustomerDynamicListComponent, card_component_1.CustomerDynamicCardComponent, component_outlet_directive_1.ComponentOutlet],
                    providers: [],
                    entryComponents: [list_component_1.CustomerDynamicListComponent, card_component_1.CustomerDynamicCardComponent],
                    bootstrap: [index_component_1.CustomerDynamicIndexComponent]
                }),
                __metadata("design:paramtypes", [])
            ], CustomerDynamicIndexModule);
            exports_1("CustomerDynamicIndexModule", CustomerDynamicIndexModule);
        }
    };
});
//# sourceMappingURL=index.module.js.map