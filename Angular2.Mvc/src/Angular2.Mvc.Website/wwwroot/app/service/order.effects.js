System.register(["@ngrx/effects", "@angular/core", "rxjs", "./order.action", "../component/Basic/Product/order.service", "../class/utility"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var effects_1, core_1, rxjs_1, order_action_1, order_service_1, utility_1, orderEffects;
    return {
        setters: [
            function (effects_1_1) {
                effects_1 = effects_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            },
            function (order_action_1_1) {
                order_action_1 = order_action_1_1;
            },
            function (order_service_1_1) {
                order_service_1 = order_service_1_1;
            },
            function (utility_1_1) {
                utility_1 = utility_1_1;
            }
        ],
        execute: function () {
            orderEffects = (function () {
                function orderEffects(action$, orderService) {
                    var _this = this;
                    this.action$ = action$;
                    this.orderService = orderService;
                    this.save$ = this.action$
                        .ofType(order_action_1.SAVE)
                        .switchMap(function (action) {
                        var payload = {
                            id: utility_1.Utility.generateUUID(),
                            status: "Saved!!",
                            date: action.payload.date,
                            items: action.payload.items
                        };
                        //Save the order to backend, database ...etc Or get something
                        return _this.orderService.save(payload).delay(1000).switchMap(function () {
                            return rxjs_1.Observable.of({ 'type': order_action_1.SAVED, 'payload': payload });
                        });
                    });
                    this.saved$ = this.action$
                        .ofType(order_action_1.SAVED).delay(1000)
                        .switchMap(function (action) {
                        action.payload.status = "Complete";
                        return rxjs_1.Observable.of({ 'type': order_action_1.COMPLETE, 'payload': action.payload });
                    });
                }
                return orderEffects;
            }());
            __decorate([
                effects_1.Effect(),
                __metadata("design:type", Object)
            ], orderEffects.prototype, "save$", void 0);
            __decorate([
                effects_1.Effect(),
                __metadata("design:type", Object)
            ], orderEffects.prototype, "saved$", void 0);
            orderEffects = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [effects_1.Actions,
                    order_service_1.OrderService])
            ], orderEffects);
            exports_1("orderEffects", orderEffects);
        }
    };
});
//# sourceMappingURL=order.effects.js.map