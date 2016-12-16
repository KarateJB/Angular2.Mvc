System.register(["./customer-index.component", "./customer-create.component", "./customer-edit.component", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var customer_index_component_1, customer_create_component_1, customer_edit_component_1, router_1, appRoutes, appRoutingProviders, CustomerRoutes;
    return {
        setters: [
            function (customer_index_component_1_1) {
                customer_index_component_1 = customer_index_component_1_1;
            },
            function (customer_create_component_1_1) {
                customer_create_component_1 = customer_create_component_1_1;
            },
            function (customer_edit_component_1_1) {
                customer_edit_component_1 = customer_edit_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: 'Basic/Customer/Index', component: customer_index_component_1.CustomerIndexComponent },
                { path: 'Basic/Customer/Create', component: customer_create_component_1.CustomerCreateComponent },
                { path: 'Basic/Customer/Edit/:id', component: customer_edit_component_1.CustomerEditComponent },
                { path: '', redirectTo: '/Basic/Customer/Index', pathMatch: 'full' }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("CustomerRoutes", CustomerRoutes = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
//# sourceMappingURL=customer.route.js.map