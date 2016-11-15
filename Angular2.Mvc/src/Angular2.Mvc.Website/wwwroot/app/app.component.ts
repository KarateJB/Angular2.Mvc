import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


@Component({
    selector: 'core-app',
    templateUrl:'/app/app.component.html'
})
export class AppComponent implements OnInit {

    private isAuth = false;
    private user = {};


    constructor(private af: AngularFire) {
        this.af.auth.subscribe(
            user => this._changeState(user),
            error => console.trace(error)
        );
    }

    ngOnInit() {

    }

    //Login
    private login(provider: string) {
        this.af.auth.login({
            provider: this.getProvider(provider), method: AuthMethods.Popup
        });
    }

    //Logout
    private logout() {
        this.af.auth.logout();
    }

    private _changeState(user: any = null) {
        if (user) {
            this.isAuth = true;
            this.user = this.getUserInfo(user)
        }
        else {
            this.isAuth = false;
            this.user = {};
        }
    }

    private getUserInfo(user: any): any {
        if (!user) {
            return {};
        }
        let data = user.auth.providerData[0];
        return {
            name: data.displayName,
            avatar: data.photoURL,
            email: data.email,
            provider: data.providerId
        };
    }

    private getProvider(provider: string) {
        switch (provider) {
            case 'twitter': return AuthProviders.Twitter;
            case 'facebook': return AuthProviders.Facebook;
            case 'github': return AuthProviders.Github;
            case 'google': return AuthProviders.Google;
        }
    }
}  