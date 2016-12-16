System.register(["@angular/core", "./blockUI.comp"], function (exports_1, context_1) {
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
    var core_1, blockUI_comp_1, BlockUIService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (blockUI_comp_1_1) {
                blockUI_comp_1 = blockUI_comp_1_1;
            }
        ],
        execute: function () {
            BlockUIService = (function () {
                function BlockUIService(appRef, componentFactoryResolver) {
                    this.appRef = appRef;
                    this.componentFactoryResolver = componentFactoryResolver;
                }
                BlockUIService.prototype.start = function () {
                    //let rootRef: ElementRef = this.appRef['_rootComponents'][0].location;
                    var viewContainerRef = this.appRef['_rootComponents'][0]['_hostElement'].vcRef;
                    var factory = this.componentFactoryResolver.resolveComponentFactory(blockUI_comp_1.BlockUIComponent);
                    this.blockUI = viewContainerRef.createComponent(factory);
                };
                BlockUIService.prototype.stop = function () {
                    if (this.blockUI) {
                        this.blockUI.destroy();
                    }
                };
                return BlockUIService;
            }());
            BlockUIService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [core_1.ApplicationRef,
                    core_1.ComponentFactoryResolver])
            ], BlockUIService);
            exports_1("BlockUIService", BlockUIService);
        }
    };
});
//# sourceMappingURL=blockUI.service.js.map