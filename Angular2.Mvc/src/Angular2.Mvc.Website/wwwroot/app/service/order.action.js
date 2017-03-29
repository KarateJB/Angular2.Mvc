System.register(["../class/Order"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Order_1, SAVE, SAVED, CANCEL, CANCELLED, COMPLETE, orderReducer;
    return {
        setters: [
            function (Order_1_1) {
                Order_1 = Order_1_1;
            }
        ],
        execute: function () {
            exports_1("SAVE", SAVE = 'SAVE');
            exports_1("SAVED", SAVED = 'SAVED');
            exports_1("CANCEL", CANCEL = 'CANCEL');
            exports_1("CANCELLED", CANCELLED = 'CANCELLED');
            exports_1("COMPLETE", COMPLETE = 'COMPLETE');
            exports_1("orderReducer", orderReducer = function (state, action) {
                if (state === void 0) { state = new Order_1.Order(); }
                switch (action.type) {
                    case SAVE:
                        console.log('The order is saving!!');
                        state = action.payload;
                        console.log(state);
                        return state;
                    case SAVED:
                        console.log('The order is saved!!');
                        state = action.payload;
                        console.log(state);
                        return state;
                    case CANCEL:
                        return state;
                    case CANCELLED:
                        return state;
                    case COMPLETE:
                        console.log('The order is completed!');
                        state.status = "Complete";
                        return state;
                    default:
                        return state;
                }
            });
        }
    };
});
//# sourceMappingURL=order.action.js.map