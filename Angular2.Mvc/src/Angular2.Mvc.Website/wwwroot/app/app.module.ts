import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AppComponent }  from './app.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyCZzDE0KS0jj4WIW424-92w86lerFaLiKU",
    authDomain: "fir-e1a22.firebaseapp.com",
    databaseURL: "https://fir-e1a22.firebaseio.com",
    storageBucket: "fir-e1a22.appspot.com",
    messagingSenderId: "499014936125"
};



@NgModule({
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [AppComponent],
    //providers: [FIREBASE_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule { }

