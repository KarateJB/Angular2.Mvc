System.register(['@angular/router', './product-index.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, product_index_component_1;
    var appRoutes, ProductRoutes;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_index_component_1_1) {
                product_index_component_1 = product_index_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: 'Basic/Product/Index', component: product_index_component_1.ProductIndexComponent },
                { path: '', redirectTo: '/Basic/Product/Index', pathMatch: 'full' }
            ];
            exports_1("ProductRoutes", ProductRoutes = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=product.route.js.map