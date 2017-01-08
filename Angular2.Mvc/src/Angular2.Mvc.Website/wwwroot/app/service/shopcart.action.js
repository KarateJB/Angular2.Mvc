System.register(["../class/ShopCart"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function pushToCart(shopcart, payload) {
        shopcart.cnt += 1;
        shopcart.sum += payload.price * 1;
        console.log(shopcart);
        return shopcart;
    }
    exports_1("pushToCart", pushToCart);
    function pullFromCart(shopcart, payload) {
        shopcart.cnt -= 1;
        shopcart.sum -= payload.price * 1;
        return shopcart;
    }
    exports_1("pullFromCart", pullFromCart);
    var ShopCart_1, PUSH, PULL, CLEAR, shopcartReducer;
    return {
        setters: [
            function (ShopCart_1_1) {
                ShopCart_1 = ShopCart_1_1;
            }
        ],
        execute: function () {
            exports_1("PUSH", PUSH = 'PUSH');
            exports_1("PULL", PULL = 'PULL');
            exports_1("CLEAR", CLEAR = 'CLEAR');
            exports_1("shopcartReducer", shopcartReducer = function (state, action) {
                if (state === void 0) { state = new ShopCart_1.ShopCart(); }
                switch (action.type) {
                    case PUSH:
                        console.log('shopcartReducer: INCREMENT');
                        return pushToCart(state, action.payload);
                    case PULL:
                        return pullFromCart(state, action.payload);
                    case CLEAR:
                        state.cnt = 0;
                        state.sum = 0;
                        return state;
                    default:
                        return state;
                }
            });
        }
    };
});
//# sourceMappingURL=shopcart.action.js.map