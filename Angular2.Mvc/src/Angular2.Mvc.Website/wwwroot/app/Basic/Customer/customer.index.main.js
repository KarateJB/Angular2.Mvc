System.register(['angular2/platform/browser', './customer.index.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, customer_index_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (customer_index_component_1_1) {
                customer_index_component_1 = customer_index_component_1_1;
            }],
        execute: function() {
            //import {CustomerService} from './customer.service';
            //enableProdMode();
            browser_1.bootstrap(customer_index_component_1.CustomerIndexComponent);
        }
    }
});
//# sourceMappingURL=customer.index.main.js.map