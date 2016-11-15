System.register(['@angular/core', 'angularfire2'], function(exports_1, context_1) {
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
    var core_1, angularfire2_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(af) {
                    var _this = this;
                    this.af = af;
                    this.isAuth = false;
                    this.user = {};
                    this.af.auth.subscribe(function (user) { return _this._changeState(user); }, function (error) { return console.trace(error); });
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                //Login
                AppComponent.prototype.login = function (provider) {
                    this.af.auth.login({
                        provider: this.getProvider(provider),
                        method: angularfire2_1.AuthMethods.Popup
                    });
                };
                //Logout
                AppComponent.prototype.logout = function () {
                    this.af.auth.logout();
                };
                AppComponent.prototype._changeState = function (user) {
                    if (user === void 0) { user = null; }
                    if (user) {
                        this.isAuth = true;
                        this.user = this.getUserInfo(user);
                    }
                    else {
                        this.isAuth = false;
                        this.user = {};
                    }
                };
                AppComponent.prototype.getUserInfo = function (user) {
                    if (!user) {
                        return {};
                    }
                    var data = user.auth.providerData[0];
                    return {
                        name: data.displayName,
                        avatar: data.photoURL,
                        email: data.email,
                        provider: data.providerId
                    };
                };
                AppComponent.prototype.getProvider = function (provider) {
                    switch (provider) {
                        case 'twitter': return angularfire2_1.AuthProviders.Twitter;
                        case 'facebook': return angularfire2_1.AuthProviders.Facebook;
                        case 'github': return angularfire2_1.AuthProviders.Github;
                        case 'google': return angularfire2_1.AuthProviders.Google;
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'core-app',
                        templateUrl: '/app/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [angularfire2_1.AngularFire])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map