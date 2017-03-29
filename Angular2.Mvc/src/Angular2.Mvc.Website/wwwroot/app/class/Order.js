System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Order;
    return {
        setters: [],
        execute: function () {
            Order = (function () {
                function Order() {
                    this.date = new Date().toLocaleDateString();
                    this.items = [];
                }
                return Order;
            }());
            exports_1("Order", Order);
        }
    };
});
//# sourceMappingURL=Order.js.map