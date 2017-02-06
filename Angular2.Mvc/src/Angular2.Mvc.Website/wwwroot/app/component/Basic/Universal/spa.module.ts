import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SpaComponent }  from './spa.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        HttpModule
    ],
    declarations: [SpaComponent],
    providers: [],
    entryComponents: [],
    bootstrap: [SpaComponent]
})
export class SpaModule { }
