System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ShopItem;
    return {
        setters: [],
        execute: function () {
            ShopItem = (function () {
                function ShopItem(fields) {
                    if (fields) {
                        Object.assign(this, fields);
                    }
                    else {
                        this.count = 0;
                        this.price = 0;
                    }
                }
                return ShopItem;
            }());
            exports_1("ShopItem", ShopItem);
        }
    };
});
//# sourceMappingURL=ShopItem.js.map