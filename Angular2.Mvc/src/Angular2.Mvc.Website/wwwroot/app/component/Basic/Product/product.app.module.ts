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
import { ShopcartComponent } from './shopcart.component';
import { ProductService } from './product.service';
import { Utility } from '../../../service/utility';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { shopcartReducer } from '../../../service/shopcart.action';
import { orderReducer } from '../../../service/order.action'; 
import { orderEffects } from "../../../service/order.effects";


import { ToastModule } from 'ng2-toastr/ng2-toastr';


let rootReducer: any = {
    shopcart: shopcartReducer,
    order: orderReducer
}


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductRoutes,
        ToastModule,
        AngularFireModule.initializeApp(FirebaseConfig.Get()),
        StoreModule.provideStore(rootReducer),
        EffectsModule.run(orderEffects)
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
        ProductBookingComponent,
        ShopcartComponent
    ],
    providers: [
        ProductService,
        Utility
    ],
    bootstrap: [ProductAppComponent]
})
export class ProductAppModule { }
