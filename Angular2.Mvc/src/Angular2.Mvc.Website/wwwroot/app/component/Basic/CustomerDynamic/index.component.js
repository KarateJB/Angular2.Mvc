System.register(["@angular/core", "../../../service/resturi.service"], function (exports_1, context_1) {
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
    var core_1, resturi_service_1, CustomerDynamicIndexComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (resturi_service_1_1) {
                resturi_service_1 = resturi_service_1_1;
            }
        ],
        execute: function () {
            CustomerDynamicIndexComponent = (function () {
                function CustomerDynamicIndexComponent() {
                    this.self = this;
                    this.title = "Customer - Index";
                    this.component = "customerdynamic-card"; //or "customerdynamic-list"
                }
                CustomerDynamicIndexComponent.prototype.ngOnInit = function () {
                };
                CustomerDynamicIndexComponent.prototype.showLists = function () {
                    this.component = "customerdynamic-list";
                };
                CustomerDynamicIndexComponent.prototype.showCards = function () {
                    this.component = "customerdynamic-card";
                };
                return CustomerDynamicIndexComponent;
            }());
            CustomerDynamicIndexComponent = __decorate([
                core_1.Component({
                    selector: 'customermvc-index',
                    providers: [resturi_service_1.RestUriService],
                    //templateUrl: '/app/component/Basic/CustomerMvc/index/customermvc-index.component.html'
                    //template: `<div *componentOutlet="template; context: self; selector:'my-test'"></div>`,
                    template: "\n    <div class=\"form-group row\" style=\"max-width:70%\">\n        <div class=\"col-sm-3\"><input type=\"text\" class=\"form-control\" value=\"\" /></div>\n        <div class=\"col-sm-3\"><button class=\"btn btn-default\" (click)=\"showLists()\"><i class=\"fa fa-list\"></i>&nbsp;Show Lists</button></div>\n        <div class=\"col-sm-3\"><button class=\"btn btn-default\" (click)=\"showCards()\"><i class=\"fa fa-vcard\"></i>&nbsp;Show Cards</button></div>\n    </div>\n    <hr />\n    <div>\n      <div component-outlet [(selector)]=\"component\"></div>\n    </div>\n  ",
                }),
                __metadata("design:paramtypes", [])
            ], CustomerDynamicIndexComponent);
            exports_1("CustomerDynamicIndexComponent", CustomerDynamicIndexComponent);
        }
    };
});
//# sourceMappingURL=index.component.js.map