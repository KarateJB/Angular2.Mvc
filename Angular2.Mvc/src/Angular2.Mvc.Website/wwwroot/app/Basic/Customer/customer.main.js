System.register(['angular2/platform/browser', './customer-app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, customer_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (customer_app_component_1_1) {
                customer_app_component_1 = customer_app_component_1_1;
            }],
        execute: function() {
            //enableProdMode();
            browser_1.bootstrap(customer_app_component_1.CustomerAppComponent);
        }
    }
});
//# sourceMappingURL=customer.main.js.map