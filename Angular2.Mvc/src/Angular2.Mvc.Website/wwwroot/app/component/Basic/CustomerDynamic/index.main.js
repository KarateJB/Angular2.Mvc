System.register(["@angular/platform-browser-dynamic", "./index.module"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, index_module_1;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (index_module_1_1) {
                index_module_1 = index_module_1_1;
            }
        ],
        execute: function () {
            //enableProdMode();
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(index_module_1.CustomerDynamicIndexModule);
        }
    };
});
//# sourceMappingURL=index.main.js.map