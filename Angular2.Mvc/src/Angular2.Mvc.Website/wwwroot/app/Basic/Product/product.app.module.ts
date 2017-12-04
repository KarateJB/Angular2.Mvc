﻿import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ProductRoutes} from './product.route';

import {ProductAppComponent} from './product.app.component';
import {ProductIndexComponent} from './product-index.component';
import {ProductCreateComponent} from './product-create.component';
import {ProductEditComponent} from './product-edit.component';
import {ProductSubComponent} from './product-sub.component';
import {ProductBooksComponent} from './product-books.component';
import {ProductToysComponent} from './product-toys.component';
import {ProductMusicComponent} from './product-music.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductRoutes
    ],
    declarations: [
        ProductAppComponent,
        ProductIndexComponent,
        ProductCreateComponent,
        ProductEditComponent,
        ProductSubComponent,
        ProductBooksComponent,
        ProductToysComponent,
        ProductMusicComponent
    ],
    bootstrap: [ProductAppComponent]
})
export class ProductAppModule { }