System.register(['@angular/platform-browser-dynamic', './customermvc-index.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, customermvc_index_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (customermvc_index_module_1_1) {
                customermvc_index_module_1 = customermvc_index_module_1_1;
            }],
        execute: function() {
            //enableProdMode();
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(customermvc_index_module_1.CustomerMvcIndexModule);
        }
    }
});
//# sourceMappingURL=customermvc-index.main.js.map