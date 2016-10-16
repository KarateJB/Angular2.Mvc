System.register(['@angular/core', './Tcustomer', './TsysEvent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Tcustomer_1, TsysEvent_1;
    var CustomerDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Tcustomer_1_1) {
                Tcustomer_1 = Tcustomer_1_1;
            },
            function (TsysEvent_1_1) {
                TsysEvent_1 = TsysEvent_1_1;
            }],
        execute: function() {
            CustomerDetailComponent = (function () {
                function CustomerDetailComponent() {
                    this.emitEvents = new core_1.EventEmitter(true); //Must set the EventEmitter to async
                }
                CustomerDetailComponent.prototype.ngOnInit = function () {
                    //Emit event
                    var evts = [
                        new TsysEvent_1.SysEvent({
                            Title: "Info",
                            Msg: "is looking at " + this.customer.Name + "'s information.",
                            CreateBy: "JB",
                            CreateOn: new Date()
                        })
                    ];
                    this.emitEvents.emit(evts);
                };
                __decorate([
                    core_1.Input('selectedCustomer'), 
                    __metadata('design:type', Tcustomer_1.Customer)
                ], CustomerDetailComponent.prototype, "customer", void 0);
                __decorate([
                    core_1.Output('emit-events'), 
                    __metadata('design:type', Object)
                ], CustomerDetailComponent.prototype, "emitEvents", void 0);
                CustomerDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-detail',
                        templateUrl: '/app/Basic/Customer/customer-detail.component.html',
                        styleUrls: ['/app/Basic/Customer/customer-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomerDetailComponent);
                return CustomerDetailComponent;
            }());
            exports_1("CustomerDetailComponent", CustomerDetailComponent);
        }
    }
});
//# sourceMappingURL=customer-detail.component.js.map