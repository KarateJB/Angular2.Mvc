System.register(['@angular/core', '@angular/forms', '@angular/platform-browser', '@angular/http', './create.component', '../../pipe/sanitizeHtml.pipe'], function(exports_1, context_1) {
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
    var core_1, forms_1, platform_browser_1, http_1, create_component_1, sanitizeHtml_pipe_1;
    var CustomerMvcCreateModule;
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
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            },
            function (sanitizeHtml_pipe_1_1) {
                sanitizeHtml_pipe_1 = sanitizeHtml_pipe_1_1;
            }],
        execute: function() {
            CustomerMvcCreateModule = (function () {
                function CustomerMvcCreateModule() {
                }
                CustomerMvcCreateModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                        ],
                        declarations: [create_component_1.CustomerMvcCreateComponent, sanitizeHtml_pipe_1.SanitizeHtml],
                        providers: [],
                        bootstrap: [create_component_1.CustomerMvcCreateComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomerMvcCreateModule);
                return CustomerMvcCreateModule;
            }());
            exports_1("CustomerMvcCreateModule", CustomerMvcCreateModule);
        }
    }
});
//# sourceMappingURL=create.module.js.map