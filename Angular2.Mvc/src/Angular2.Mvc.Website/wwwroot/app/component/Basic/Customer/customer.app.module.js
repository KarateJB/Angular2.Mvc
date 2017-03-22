System.register(["@angular/core", "@angular/forms", "@angular/platform-browser", "@angular/http", "./customer.route", "./customer.pipe", "../../../directive/safe-html.directive", "../../blockUI/blockUI.comp", "./customer.app.component", "./customer-index.component", "./customer-detail.component", "./customer-create.component", "./customer-edit.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, platform_browser_1, http_1, customer_route_1, customer_pipe_1, safe_html_directive_1, blockUI_comp_1, customer_app_component_1, customer_index_component_1, customer_detail_component_1, customer_create_component_1, customer_edit_component_1, CustomerAppModule;
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
            function (customer_route_1_1) {
                customer_route_1 = customer_route_1_1;
            },
            function (customer_pipe_1_1) {
                customer_pipe_1 = customer_pipe_1_1;
            },
            function (safe_html_directive_1_1) {
                safe_html_directive_1 = safe_html_directive_1_1;
            },
            function (blockUI_comp_1_1) {
                blockUI_comp_1 = blockUI_comp_1_1;
            },
            function (customer_app_component_1_1) {
                customer_app_component_1 = customer_app_component_1_1;
            },
            function (customer_index_component_1_1) {
                customer_index_component_1 = customer_index_component_1_1;
            },
            function (customer_detail_component_1_1) {
                customer_detail_component_1 = customer_detail_component_1_1;
            },
            function (customer_create_component_1_1) {
                customer_create_component_1 = customer_create_component_1_1;
            },
            function (customer_edit_component_1_1) {
                customer_edit_component_1 = customer_edit_component_1_1;
            }
        ],
        execute: function () {
            CustomerAppModule = (function () {
                function CustomerAppModule() {
                }
                return CustomerAppModule;
            }());
            CustomerAppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        customer_route_1.CustomerRoutes
                    ],
                    declarations: [blockUI_comp_1.BlockUIComponent, customer_app_component_1.CustomerAppComponent, customer_index_component_1.CustomerIndexComponent, customer_detail_component_1.CustomerDetailComponent, customer_create_component_1.CustomerCreateComponent, customer_edit_component_1.CustomerEditComponent, customer_pipe_1.WrapEventPipe, safe_html_directive_1.SafeHtml],
                    providers: [
                        //appRoutingProviders,
                        { provide: core_1.LOCALE_ID, useValue: "zh-TW" },
                    ],
                    entryComponents: [
                        blockUI_comp_1.BlockUIComponent
                    ],
                    bootstrap: [customer_app_component_1.CustomerAppComponent]
                })
            ], CustomerAppModule);
            exports_1("CustomerAppModule", CustomerAppModule);
        }
    };
});
//# sourceMappingURL=customer.app.module.js.map