System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var DynamichtmlOutlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DynamichtmlOutlet = (function () {
                function DynamichtmlOutlet(vcRef, resolver) {
                    this.vcRef = vcRef;
                    this.resolver = resolver;
                }
                DynamichtmlOutlet.prototype.ngOnChanges = function () {
                    if (!this.src)
                        return;
                    var metadata = new core_1.Component({
                        selector: 'dynamic-html',
                        template: this.src
                    });
                    //createComponentFactory(this.resolver, metadata).then(factory => {
                    //    const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
                    //    this.vcRef.createComponent(factory, 0, injector, []);
                    //})
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DynamichtmlOutlet.prototype, "src", void 0);
                DynamichtmlOutlet = __decorate([
                    core_1.Directive({
                        selector: 'dynamic-html-outlet'
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentFactoryResolver])
                ], DynamichtmlOutlet);
                return DynamichtmlOutlet;
            }());
            exports_1("DynamichtmlOutlet", DynamichtmlOutlet);
        }
    }
});
//# sourceMappingURL=component-factory.directive.js.map