System.register(['./customer-index.component', './customer-create.component', './customer-edit.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var customer_index_component_1, customer_create_component_1, customer_edit_component_1;
    var CustomerRoutes;
    return {
        setters:[
            function (customer_index_component_1_1) {
                customer_index_component_1 = customer_index_component_1_1;
            },
            function (customer_create_component_1_1) {
                customer_create_component_1 = customer_create_component_1_1;
            },
            function (customer_edit_component_1_1) {
                customer_edit_component_1 = customer_edit_component_1_1;
            }],
        execute: function() {
            exports_1("CustomerRoutes", CustomerRoutes = [
                { path: '/Basic/Customer/Index', name: 'Index', component: customer_index_component_1.CustomerIndexComponent },
                { path: '/Basic/Customer/Create', name: 'Create', component: customer_create_component_1.CustomerCreateComponent },
                { path: '/Basic/Customer/Edit/:id', name: 'Edit', component: customer_edit_component_1.CustomerEditComponent }
            ]);
        }
    }
});
//# sourceMappingURL=customer.route.js.map