System.register(['angular2/platform/browser', './customer.edit.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, customer_edit_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (customer_edit_component_1_1) {
                customer_edit_component_1 = customer_edit_component_1_1;
            }],
        execute: function() {
            //enableProdMode();
            browser_1.bootstrap(customer_edit_component_1.CustomerEditComponent);
        }
    }
});
//# sourceMappingURL=customer.edit.main.js.map