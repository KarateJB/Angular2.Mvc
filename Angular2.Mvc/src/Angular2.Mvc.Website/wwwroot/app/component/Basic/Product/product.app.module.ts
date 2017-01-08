import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ProductRoutes } from './product.route';
import { AngularFireModule } from 'angularfire2';

import { FirebaseConfig } from '../../../class/FirebaseConfig';
import { ProductAppComponent } from './product.app.component';
import { ProductIndexComponent } from './product-index.component';
import { ProductCreateComponent } from './product-create.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductSubComponent } from './product-sub.component';
import { ProductBooksComponent } from './product-books.component';
import { ProductToysComponent } from './product-toys.component';
import { ProductMusicComponent } from './product-music.component';
import { ProductBookingComponent } from './product-booking.component';
import { ProductService } from './product.service';


import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../../../service/counter.action';
import { shopcartReducer } from '../../../service/shopcart.action';


let rootReducer: any = {
    counter: counterReducer,
    shopcart: shopcartReducer
}


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductRoutes,
        AngularFireModule.initializeApp(FirebaseConfig.Get()),
        StoreModule.provideStore(rootReducer)
    ],
    declarations: [
        ProductAppComponent,
        ProductIndexComponent,
        ProductCreateComponent,
        ProductEditComponent,
        ProductSubComponent,
        ProductBooksComponent,
        ProductToysComponent,
        ProductMusicComponent,
        ProductBookingComponent
    ],
    providers: [
        ProductService
    ],
    bootstrap: [ProductAppComponent]
})
export class ProductAppModule { }
