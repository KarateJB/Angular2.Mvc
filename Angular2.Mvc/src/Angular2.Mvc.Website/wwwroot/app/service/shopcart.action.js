System.register(["../class/ShopCart"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function pushToCart(shopcart, payload) {
        shopcart.cnt += 1;
        shopcart.sum += payload.price * 1;
        updateItems(shopcart, payload);
        console.log(shopcart.items);
        return shopcart;
    }
    function pullFromCart(shopcart, payload) {
        shopcart.cnt -= 1;
        shopcart.sum -= payload.price * 1;
        updateItems(shopcart, payload);
        console.log(shopcart.items);
        return shopcart;
    }
    function updateItems(shopcart, payload) {
        var targetItem = shopcart.items.find(function (item) { return item.id === payload.id; });
        if (targetItem) {
            if (payload.count <= 0) {
                var index = shopcart.items.indexOf(targetItem);
                shopcart.items.splice(index, 1);
            }
            else {
                targetItem.count = payload.count;
            }
        }
        else {
            shopcart.items.push(payload);
        }
    }
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
                        return pushToCart(state, action.payload);
                    case PULL:
                        return pullFromCart(state, action.payload);
                    case CLEAR:
                        state.cnt = 0;
                        state.sum = 0;
                        state.items = [];
                        return state;
                    default:
                        return state;
                }
            });
        }
    };
});
//# sourceMappingURL=shopcart.action.js.map