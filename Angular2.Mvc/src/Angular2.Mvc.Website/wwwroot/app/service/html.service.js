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
    var core_1, HtmlService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            HtmlService = (function () {
                function HtmlService(sanitizer) {
                    this.sanitizer = sanitizer;
                }
                //Decode Html string
                HtmlService.prototype.decodeHtml = function (htmlstr) {
                    var txt = document.createElement("textarea");
                    txt.innerHTML = htmlstr;
                    return txt.value;
                };
                //Sanitize Html string to keep it safe
                HtmlService.prototype.sanitizeHtml = function (htmlstr) {
                    return this.sanitizer.sanitize(core_1.SecurityContext.HTML, htmlstr);
                };
                return HtmlService;
            }());
            HtmlService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [core_1.Sanitizer])
            ], HtmlService);
            exports_1("HtmlService", HtmlService);
        }
    };
});
//# sourceMappingURL=html.service.js.map