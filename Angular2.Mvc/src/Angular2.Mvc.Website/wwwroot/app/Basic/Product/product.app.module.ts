import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ProductRoutes} from './product.route';
import {ProductAppComponent} from './product.app.component';
import {ProductIndexComponent} from './product-index.component';
//import {BooksComponent} from './books.component';
//import {ToysComponent} from './toys.component';
//import {MusicComponent} from './music.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductRoutes
    ],
    declarations: [
        ProductAppComponent,
        ProductIndexComponent
        //BooksComponent,
        //ToysComponent,
        //MusicComponent
    ],
    bootstrap: [ProductAppComponent]
})
export class ProductAppModule { }
