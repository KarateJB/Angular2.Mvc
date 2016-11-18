System.register(['@angular/router', './product-index.component', './product-create.component', './product-edit.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, product_index_component_1, product_create_component_1, product_edit_component_1;
    var appRoutes, ProductRoutes;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_index_component_1_1) {
                product_index_component_1 = product_index_component_1_1;
            },
            function (product_create_component_1_1) {
                product_create_component_1 = product_create_component_1_1;
            },
            function (product_edit_component_1_1) {
                product_edit_component_1 = product_edit_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: 'Basic/Product/Index', component: product_index_component_1.ProductIndexComponent },
                { path: 'Basic/Product/Create', component: product_create_component_1.ProductCreateComponent },
                { path: 'Basic/Product/Edit/:id', component: product_edit_component_1.ProductEditComponent },
                { path: '', redirectTo: '/Basic/Product/Index', pathMatch: 'full' }
            ];
            exports_1("ProductRoutes", ProductRoutes = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=product.route.js.map