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
    var BlockUIComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BlockUIComponent = (function () {
                function BlockUIComponent() {
                    this.state = {
                        message: 'Please wait...'
                    };
                }
                BlockUIComponent = __decorate([
                    core_1.Component({
                        selector: 'block-ui',
                        styleUrls: ['/app/component/blockUI/blockUI.comp.css'],
                        template: "<div class=\"in modal-backdrop blockui-overlay\"></div>\n     <div class=\"blockui-message-container\" aria-live=\"assertive\" aria-atomic=\"true\">\n        <div class=\"blockui-message\" [ngClass]=\"blockuiMessageClass\">{{ state.message }}</div>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], BlockUIComponent);
                return BlockUIComponent;
            }());
            exports_1("BlockUIComponent", BlockUIComponent);
        }
    }
});
//# sourceMappingURL=blockUI.comp.js.map