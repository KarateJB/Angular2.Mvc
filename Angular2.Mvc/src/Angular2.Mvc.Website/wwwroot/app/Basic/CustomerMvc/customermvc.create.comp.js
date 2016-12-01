System.register(['@angular/core', './customermvc.service', '../../service/resturi.service'], function(exports_1, context_1) {
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
    var core_1, customermvc_service_1, resturi_service_1;
    var CustomerMvcCreateComp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customermvc_service_1_1) {
                customermvc_service_1 = customermvc_service_1_1;
            },
            function (resturi_service_1_1) {
                resturi_service_1 = resturi_service_1_1;
            }],
        execute: function() {
            CustomerMvcCreateComp = (function () {
                function CustomerMvcCreateComp(
                    //@Inject(ElementRef) _elementRef: ElementRef,
                    elementRef, _custmvcService) {
                    this.elementRef = elementRef;
                    this._custmvcService = _custmvcService;
                }
                CustomerMvcCreateComp.prototype.ngOnInit = function () {
                    //Add event listner to dom
                    this.addEventListner();
                };
                CustomerMvcCreateComp.prototype.addEventListner = function () {
                    var _this = this;
                    var el = this.elementRef.nativeElement.querySelector("#tipImg");
                    el.addEventListener('click', function (e) {
                        e.preventDefault();
                        _this.showTip();
                    });
                };
                CustomerMvcCreateComp.prototype.showTip = function () {
                    swal('Tip', 'Required information : Name, Phone.').then(function () {
                    });
                };
                CustomerMvcCreateComp = __decorate([
                    core_1.Component({
                        selector: 'customermvc-create',
                        providers: [customermvc_service_1.CustomerMvcService, resturi_service_1.RestUriService],
                        //templateUrl: '/app/Basic/CustomerMvc/create.component.html'
                        templateUrl: '/Basic/CustomerMvc/Create'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, customermvc_service_1.CustomerMvcService])
                ], CustomerMvcCreateComp);
                return CustomerMvcCreateComp;
            }());
            exports_1("CustomerMvcCreateComp", CustomerMvcCreateComp);
        }
    }
});
//# sourceMappingURL=customermvc.create.comp.js.map