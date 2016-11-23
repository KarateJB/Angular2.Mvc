System.register(['@angular/platform-browser-dynamic', './customermvc-create.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, customermvc_create_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (customermvc_create_module_1_1) {
                customermvc_create_module_1 = customermvc_create_module_1_1;
            }],
        execute: function() {
            //enableProdMode();
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(customermvc_create_module_1.CustomerMvcCreateModule);
        }
    }
});
//# sourceMappingURL=customermvc-create.main.js.map