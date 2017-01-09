System.register(["@angular/router", "./product-index.component", "./product-create.component", "./product-edit.component", "./product-sub.component", "./product-books.component", "./product-toys.component", "./product-music.component", "./shopcart.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, product_index_component_1, product_create_component_1, product_edit_component_1, product_sub_component_1, product_books_component_1, product_toys_component_1, product_music_component_1, shopcart_component_1, appRoutes, ProductRoutes;
    return {
        setters: [
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
            },
            function (product_sub_component_1_1) {
                product_sub_component_1 = product_sub_component_1_1;
            },
            function (product_books_component_1_1) {
                product_books_component_1 = product_books_component_1_1;
            },
            function (product_toys_component_1_1) {
                product_toys_component_1 = product_toys_component_1_1;
            },
            function (product_music_component_1_1) {
                product_music_component_1 = product_music_component_1_1;
            },
            function (shopcart_component_1_1) {
                shopcart_component_1 = shopcart_component_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: 'Basic/Product/Index', component: product_index_component_1.ProductIndexComponent },
                { path: 'Basic/Product/Create', component: product_create_component_1.ProductCreateComponent },
                { path: 'Basic/Product/Edit/:id', component: product_edit_component_1.ProductEditComponent },
                { path: 'Basic/Product/Shopcart', component: shopcart_component_1.ShopcartComponent },
                {
                    path: 'Basic/Product/Sub',
                    component: product_sub_component_1.ProductSubComponent,
                    children: [
                        { path: 'Books', component: product_books_component_1.ProductBooksComponent },
                        { path: 'Toys', component: product_toys_component_1.ProductToysComponent },
                        { path: 'Music', component: product_music_component_1.ProductMusicComponent }
                    ]
                },
                //{ path: 'Basic/Product/Toys', component: ProductIndexComponent },
                //{ path: 'Basic/Product/Music', component: ProductIndexComponent },
                { path: '', redirectTo: '/Basic/Product/Index', pathMatch: 'full' }
            ];
            exports_1("ProductRoutes", ProductRoutes = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
//# sourceMappingURL=product.route.js.map