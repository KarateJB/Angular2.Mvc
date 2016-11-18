import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AppComponent }  from './app.component';



@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

