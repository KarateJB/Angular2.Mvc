System.register(['@angular/core', '../../../service/resturi.service'], function(exports_1, context_1) {
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
    var core_1, resturi_service_1;
    var MyTestComponent, CustomerMvcIndexComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (resturi_service_1_1) {
                resturi_service_1 = resturi_service_1_1;
            }],
        execute: function() {
            MyTestComponent = (function () {
                function MyTestComponent() {
                }
                MyTestComponent = __decorate([
                    core_1.Component({
                        selector: 'my-test',
                        template: '<div>Test page</div>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyTestComponent);
                return MyTestComponent;
            }());
            exports_1("MyTestComponent", MyTestComponent);
            CustomerMvcIndexComponent = (function () {
                function CustomerMvcIndexComponent(
                    //@Inject(ElementRef) _elementRef: ElementRef,
                    elementRef) {
                    this.elementRef = elementRef;
                    this.self = this;
                    this.title = "Customer - Index";
                    // this.template = `<div><p>Dynamic Component</p></div>
                    //                  <div><input type="button" value="Click" class="btn btn-default" (click)="showMsg()"/></div>
                    //`;
                }
                CustomerMvcIndexComponent.prototype.ngOnInit = function () {
                };
                CustomerMvcIndexComponent.prototype.showMsg = function () {
                    alert("Test!");
                };
                CustomerMvcIndexComponent = __decorate([
                    core_1.Component({
                        selector: 'customermvc-index',
                        providers: [resturi_service_1.RestUriService],
                        //templateUrl: '/app/Basic/CustomerMvc/index/customermvc-index.component.html'
                        //template: `<div *componentOutlet="template; context: self; selector:'my-test'"></div>`,
                        template: "\n    <div>\n      <div component-load-factory selector=\"customermvc-test\"></div>\n    </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], CustomerMvcIndexComponent);
                return CustomerMvcIndexComponent;
            }());
            exports_1("CustomerMvcIndexComponent", CustomerMvcIndexComponent);
        }
    }
});
//# sourceMappingURL=customermvc-index.component.js.map