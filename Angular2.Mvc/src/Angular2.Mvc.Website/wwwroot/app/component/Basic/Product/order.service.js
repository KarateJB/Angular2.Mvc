System.register(["@angular/core", "angularfire2", "rxjs/Observable"], function (exports_1, context_1) {
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
    var core_1, angularfire2_1, Observable_1, OrderService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
        execute: function () {
            OrderService = (function () {
                function OrderService(
                    //@Inject(FirebaseApp) private firebaseApp: any,
                    af) {
                    this.af = af;
                }
                //Query data from firebase
                OrderService.prototype._queryOrders = function () {
                    this.af.auth.subscribe(function (user) {
                        if (!user) {
                            swal("Error", "Please login ... ", "error");
                        }
                    }, function (error) { return JL("Angular2").error(error); });
                    return this.af.database.object('/Demo/orders');
                };
                //Save new order
                OrderService.prototype.save = function (order) {
                    var _this = this;
                    console.log("Saving to firebase!");
                    var promise = new Promise(function (resolve) {
                        var observable$ = _this._queryOrders();
                        var current = null;
                        observable$.subscribe(function (value) {
                            current = value;
                            current.push(order);
                            resolve(current);
                        });
                    }).then(function (newValue) {
                        //console.log(newValue);
                        var itemObservable = _this._queryOrders();
                        itemObservable.update(newValue);
                    });
                    return Observable_1.Observable.fromPromise(promise);
                };
                return OrderService;
            }());
            OrderService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [angularfire2_1.AngularFire])
            ], OrderService);
            exports_1("OrderService", OrderService);
        }
    };
});
//# sourceMappingURL=order.service.js.map