System.register(['@angular/core', '@angular/forms', '@angular/platform-browser', '@angular/http', './customermvc-index.component', '../../../pipe/sanitizeHtml.pipe', '../../../directive/component-oulet.directive'], function(exports_1, context_1) {
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
    var core_1, forms_1, platform_browser_1, http_1, customermvc_index_component_1, sanitizeHtml_pipe_1, component_oulet_directive_1;
    var CustomerMvcIndexModule;
    return {
        setters:[
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
            function (customermvc_index_component_1_1) {
                customermvc_index_component_1 = customermvc_index_component_1_1;
            },
            function (sanitizeHtml_pipe_1_1) {
                sanitizeHtml_pipe_1 = sanitizeHtml_pipe_1_1;
            },
            function (component_oulet_directive_1_1) {
                component_oulet_directive_1 = component_oulet_directive_1_1;
            }],
        execute: function() {
            CustomerMvcIndexModule = (function () {
                function CustomerMvcIndexModule() {
                }
                CustomerMvcIndexModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                        ],
                        declarations: [customermvc_index_component_1.CustomerMvcIndexComponent, sanitizeHtml_pipe_1.SanitizeHtml, component_oulet_directive_1.ComponentOutlet],
                        providers: [],
                        bootstrap: [customermvc_index_component_1.CustomerMvcIndexComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomerMvcIndexModule);
                return CustomerMvcIndexModule;
            }());
            exports_1("CustomerMvcIndexModule", CustomerMvcIndexModule);
        }
    }
});
//# sourceMappingURL=customermvc-index.module.js.map