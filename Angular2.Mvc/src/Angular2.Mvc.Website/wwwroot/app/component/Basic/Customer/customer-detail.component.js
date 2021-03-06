System.register(["@angular/core", "../../../class/Customer", "../../../class/SysEvent"], function (exports_1, context_1) {
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
    var core_1, Customer_1, SysEvent_1, CustomerDetailComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Customer_1_1) {
                Customer_1 = Customer_1_1;
            },
            function (SysEvent_1_1) {
                SysEvent_1 = SysEvent_1_1;
            }
        ],
        execute: function () {
            CustomerDetailComponent = (function () {
                function CustomerDetailComponent() {
                    this.emitEvents = new core_1.EventEmitter(true); //Must set the EventEmitter to async
                }
                CustomerDetailComponent.prototype.ngOnInit = function () {
                    //Emit event
                    var evts = [
                        new SysEvent_1.SysEvent({
                            Title: "Info",
                            Msg: "is looking at " + this.customer.Name + "'s information.",
                            CreateBy: "JB",
                            CreateOn: new Date()
                        })
                    ];
                    this.emitEvents.emit(evts);
                };
                return CustomerDetailComponent;
            }());
            __decorate([
                core_1.Input('selectedCustomer'),
                __metadata("design:type", Customer_1.Customer)
            ], CustomerDetailComponent.prototype, "customer", void 0);
            __decorate([
                core_1.Output('emit-events'),
                __metadata("design:type", Object)
            ], CustomerDetailComponent.prototype, "emitEvents", void 0);
            CustomerDetailComponent = __decorate([
                core_1.Component({
                    selector: 'customer-detail',
                    templateUrl: '/app/component/Basic/Customer/customer-detail.component.html',
                    styleUrls: ['/app/component/Basic/Customer/customer-detail.component.css']
                }),
                __metadata("design:paramtypes", [])
            ], CustomerDetailComponent);
            exports_1("CustomerDetailComponent", CustomerDetailComponent);
        }
    };
});
//# sourceMappingURL=customer-detail.component.js.map