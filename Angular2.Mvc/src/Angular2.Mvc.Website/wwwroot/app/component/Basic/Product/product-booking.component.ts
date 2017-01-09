/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Product } from '../../../class/Product';
import { ProductService } from './product.service';
import { PUSH,PULL,CLEAR } from '../../../service/shopcart.action';
import { IShopCart } from '../../../interface/IShopCart';
import { ShopCart } from '../../../class/ShopCart';
import { ShopItem } from '../../../class/ShopItem';


declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-booking',
    template: `
               <table>
                 <tr>
                   <td (click)="decrement()"><label style="min-width:25px"><i class="fa fa-minus"></i></label></td>
                   <td><input style="max-width:50px" readonly="readonly" type="text" value="{{shopItem.count}}"/></td>
                   <td (click)="increment()"><label style="min-width:25px"><i class="fa fa-plus"></i></label></td>
                 </tr>
               </table>
              `
})

export class ProductBookingComponent implements OnInit, OnChanges {

    @Input('product') product: Product; 
    @Output('emit-events') emitEvents = new EventEmitter<ShopCart>(true); //Must set the EventEmitter to async


    private counter: number = 0;
    private shopItem: ShopItem = null;
    private shopcart: Observable<IShopCart>;

    constructor(
        private router: Router,
        private productService: ProductService,
        private store: Store<IShopCart>
    ) {
        this.productService = productService;

        //Create ShopItem
        this.shopItem = new ShopItem();
        //Get the reducer
        this.shopcart = store.select("shopcart");
    }


    public ngOnChanges() {
        this.shopItem.id = this.product.Id;
        this.shopItem.title = this.product.Title;
        this.shopItem.count = 0;
        this.shopItem.price = this.product.Price;
    }

    private increment() {
        this.shopItem.count += 1;
        this.store.dispatch({ type: PUSH, payload: this.shopItem });

        this.shopcart.subscribe(data => {
            this.emitEvents.emit(data);
        });

    }

    private decrement() {
        this.shopItem.count -= 1;
        this.store.dispatch({ type: PULL, payload: this.shopItem });


        this.shopcart.subscribe(data => {
            this.emitEvents.emit(data);
        });
        
    }

    private reset() {
        this.shopItem.count = 0;
        this.store.dispatch({ type: CLEAR });

        this.shopcart.subscribe(data => {
            this.emitEvents.emit(data);
        });
    }

    ngOnInit() {
    }
}

