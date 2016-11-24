System.register(['@angular/core', '@angular/platform-browser'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1;
    var SanitizeHtml;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }],
        execute: function() {
            SanitizeHtml = (function () {
                function SanitizeHtml(_sanitizer) {
                    this._sanitizer = _sanitizer;
                }
                SanitizeHtml.prototype.transform = function (input) {
                    return this._sanitizer.bypassSecurityTrustHtml(input);
                };
                SanitizeHtml = __decorate([
                    core_1.Pipe({
                        name: 'sanitizeHtml'
                    }), 
                    __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
                ], SanitizeHtml);
                return SanitizeHtml;
            }());
            exports_1("SanitizeHtml", SanitizeHtml);
        }
    }
});
//# sourceMappingURL=sanitizeHtml.pipe.js.map