System.register(["@angular/core", "@angular/forms", "@angular/platform-browser", "@angular/http", "./customermvc.app.comp", "./customermvc.list.comp", "./customermvc.create.comp", "./customermvc.edit.comp", "./customermvc.route", "../../../pipe/sanitizeHtml.pipe"], function (exports_1, context_1) {
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
    var core_1, forms_1, platform_browser_1, http_1, customermvc_app_comp_1, customermvc_list_comp_1, customermvc_create_comp_1, customermvc_edit_comp_1, customermvc_route_1, sanitizeHtml_pipe_1, CustomerMvcAppModule;
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
            function (customermvc_app_comp_1_1) {
                customermvc_app_comp_1 = customermvc_app_comp_1_1;
            },
            function (customermvc_list_comp_1_1) {
                customermvc_list_comp_1 = customermvc_list_comp_1_1;
            },
            function (customermvc_create_comp_1_1) {
                customermvc_create_comp_1 = customermvc_create_comp_1_1;
            },
            function (customermvc_edit_comp_1_1) {
                customermvc_edit_comp_1 = customermvc_edit_comp_1_1;
            },
            function (customermvc_route_1_1) {
                customermvc_route_1 = customermvc_route_1_1;
            },
            function (sanitizeHtml_pipe_1_1) {
                sanitizeHtml_pipe_1 = sanitizeHtml_pipe_1_1;
            }
        ],
        execute: function () {
            CustomerMvcAppModule = (function () {
                function CustomerMvcAppModule() {
                }
                return CustomerMvcAppModule;
            }());
            CustomerMvcAppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        customermvc_route_1.CustomerMvcRoutes
                    ],
                    declarations: [customermvc_app_comp_1.CustomerMvcAppComp, customermvc_list_comp_1.CustomerMvcListComp, customermvc_create_comp_1.CustomerMvcCreateComp, customermvc_edit_comp_1.CustomerMvcEditComp, sanitizeHtml_pipe_1.SanitizeHtml],
                    providers: [],
                    bootstrap: [customermvc_app_comp_1.CustomerMvcAppComp]
                }),
                __metadata("design:paramtypes", [])
            ], CustomerMvcAppModule);
            exports_1("CustomerMvcAppModule", CustomerMvcAppModule);
        }
    };
});
//# sourceMappingURL=customermvc.app.module.js.map