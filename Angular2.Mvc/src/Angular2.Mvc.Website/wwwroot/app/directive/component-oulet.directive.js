System.register(['@angular/core', '@angular/common', '@angular/forms'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1;
    var ComponentOutlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            ComponentOutlet = (function () {
                function ComponentOutlet(vcRef, compiler) {
                    this.vcRef = vcRef;
                    this.compiler = compiler;
                    this.imports = [common_1.CommonModule, forms_1.FormsModule];
                }
                ComponentOutlet.prototype._createDynamicComponent = function () {
                    this.context = this.context || {};
                    var metadata = new core_1.Component({
                        selector: this.selector,
                        template: this.template,
                    });
                    var ctx = this.context;
                    var cmpClass = (function () {
                        function _() {
                            this.prototype = ctx;
                        }
                        return _;
                    }());
                    var component = core_1.Component(metadata)(cmpClass);
                    // make a module that does not inherit from anything except Object
                    var mdClass = (function () {
                        function _() {
                            this.prototype = {};
                        }
                        return _;
                    }());
                    return core_1.NgModule({
                        imports: this.imports,
                        declarations: [component],
                        exports: [component],
                        providers: []
                    })(mdClass);
                };
                ComponentOutlet.prototype.ngOnChanges = function () {
                    var _this = this;
                    var self = this;
                    if (!self.template)
                        return;
                    console.log(self.template);
                    var selfDyn = self._createDynamicComponent();
                    console.log(selfDyn);
                    self.compiler.compileModuleAndAllComponentsAsync(selfDyn)
                        .then(function (factory) {
                        self.vcRef.clear(); // to remove any previously loaded template, if this template is re-created dynamically from the parent
                        var injector = core_1.ReflectiveInjector.fromResolvedProviders([], self.vcRef.parentInjector);
                        var component;
                        for (var i = factory.componentFactories.length - 1; i >= 0; i--) {
                            if (factory.componentFactories[i].selector === self.selector) {
                                component = factory.componentFactories[i];
                                break;
                            }
                        }
                        _this.vcRef.createComponent(component, 0, injector);
                    });
                };
                __decorate([
                    core_1.Input('componentOutlet'), 
                    __metadata('design:type', String)
                ], ComponentOutlet.prototype, "template", void 0);
                __decorate([
                    core_1.Input('componentOutletSelector'), 
                    __metadata('design:type', String)
                ], ComponentOutlet.prototype, "selector", void 0);
                __decorate([
                    core_1.Input('componentOutletContext'), 
                    __metadata('design:type', Object)
                ], ComponentOutlet.prototype, "context", void 0);
                __decorate([
                    core_1.Input('componentOutletImports'), 
                    __metadata('design:type', Array)
                ], ComponentOutlet.prototype, "imports", void 0);
                ComponentOutlet = __decorate([
                    core_1.Directive({
                        selector: '[componentOutlet]',
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.Compiler])
                ], ComponentOutlet);
                return ComponentOutlet;
            }());
            exports_1("ComponentOutlet", ComponentOutlet);
        }
    }
});
//# sourceMappingURL=component-oulet.directive.js.map