System.register(['@angular/platform-browser-dynamic', './product.app.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, product_app_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (product_app_module_1_1) {
                product_app_module_1 = product_app_module_1_1;
            }],
        execute: function() {
            //enableProdMode();
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(product_app_module_1.ProductAppModule);
        }
    }
});
//# sourceMappingURL=product.main.js.map