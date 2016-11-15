import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {FirebaseConfig} from './class/FirebaseConfig';
import { AppComponent }  from './app.component';



@NgModule({
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(FirebaseConfig.Get())
    ],
    declarations: [AppComponent],
    //providers: [FIREBASE_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule { }

