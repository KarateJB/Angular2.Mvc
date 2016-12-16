System.register(["./customermvc.list.comp", "./customermvc.create.comp", "./customermvc.edit.comp", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var customermvc_list_comp_1, customermvc_create_comp_1, customermvc_edit_comp_1, router_1, appRoutes, appRoutingProviders, CustomerMvcRoutes;
    return {
        setters: [
            function (customermvc_list_comp_1_1) {
                customermvc_list_comp_1 = customermvc_list_comp_1_1;
            },
            function (customermvc_create_comp_1_1) {
                customermvc_create_comp_1 = customermvc_create_comp_1_1;
            },
            function (customermvc_edit_comp_1_1) {
                customermvc_edit_comp_1 = customermvc_edit_comp_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: 'Basic/CustomerMvc/Index', component: customermvc_list_comp_1.CustomerMvcListComp },
                { path: 'Basic/CustomerMvc/Create', component: customermvc_create_comp_1.CustomerMvcCreateComp },
                { path: 'Basic/CustomerMvc/Edit/:id', component: customermvc_edit_comp_1.CustomerMvcEditComp },
                { path: '', redirectTo: '/Basic/CustomerMvc/Index', pathMatch: 'full' }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("CustomerMvcRoutes", CustomerMvcRoutes = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
//# sourceMappingURL=customermvc.route.js.map