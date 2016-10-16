//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//import {enableProdMode} from '@angular/core';
//import {CustomerAppModule} from './customer.app.module';
System.register(['@angular/platform-browser-dynamic', './customer.app.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, customer_app_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (customer_app_module_1_1) {
                customer_app_module_1 = customer_app_module_1_1;
            }],
        execute: function() {
            //enableProdMode();
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(customer_app_module_1.CustomerAppModule);
        }
    }
});
//# sourceMappingURL=customer.main.js.map