System.register(["@angular/platform-browser-dynamic", "./spa.module"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, spa_module_1;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (spa_module_1_1) {
                spa_module_1 = spa_module_1_1;
            }
        ],
        execute: function () {
            //enableProdMode();
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(spa_module_1.SpaModule);
        }
    };
});
//# sourceMappingURL=spa.main.js.map