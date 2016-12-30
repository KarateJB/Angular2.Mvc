System.register(["@angular/core"], function (exports_1, context_1) {
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
    var core_1, ComponentOutlet;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ComponentOutlet = (function () {
                function ComponentOutlet(vcRef, resolver) {
                    this.vcRef = vcRef;
                    this.resolver = resolver;
                }
                ComponentOutlet.prototype.ngOnChanges = function () {
                    var _this = this;
                    console.log("this.selector=" + this.selector);
                    console.log("this.inputValue=" + this.inputValue);
                    if (!this.selector)
                        return;
                    var factories = Array.from(this.resolver['_factories'].values());
                    var factory = factories.find(function (x) { return x.selector === _this.selector; });
                    var compRef = this.vcRef.createComponent(factory);
                    //Set input value for the component (optional)
                    compRef.instance.inputValue = this.inputValue;
                    //console.log(this.resolver['_factories']);
                    //var factories = Array.from(this.resolver['_factories'].keys());
                    //var factoryClass: any = factories.find((x: any) => x.name === this.selector);
                    //const factory = this.resolver.resolveComponentFactory(factoryClass);
                    //const compRef = this.vcRef.createComponent(factory);
                    if (this.componentRef) {
                        this.componentRef.destroy();
                    }
                    this.componentRef = compRef;
                };
                ComponentOutlet.prototype.ngOnDestroy = function () {
                    if (this.componentRef) {
                        this.componentRef.destroy();
                        this.componentRef = null;
                    }
                };
                return ComponentOutlet;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], ComponentOutlet.prototype, "selector", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], ComponentOutlet.prototype, "inputValue", void 0);
            ComponentOutlet = __decorate([
                core_1.Directive({
                    selector: '[component-outlet]'
                }),
                __metadata("design:paramtypes", [core_1.ViewContainerRef,
                    core_1.ComponentFactoryResolver])
            ], ComponentOutlet);
            exports_1("ComponentOutlet", ComponentOutlet);
        }
    };
});
//# sourceMappingURL=component-outlet.directive.js.map