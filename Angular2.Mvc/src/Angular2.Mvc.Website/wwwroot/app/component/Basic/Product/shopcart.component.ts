﻿/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import { Component, Pipe, PipeTransform, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, State } from '@ngrx/store';
import { PUSH, PULL, CLEAR } from '../../../service/shopcart.action';
import { SAVE, CANCEL, COMPLETE } from '../../../service/order.action';
import { IShopCart } from '../../../interface/IShopCart';
import { IOrder } from '../../../interface/IOrder';
import { Order } from '../../../class/Order';
import { ShopCart } from '../../../class/ShopCart';
import { ShopItem } from '../../../class/ShopItem';


declare var swal: any; //SweetAlert2 typings definition


interface AppState {
    counter: number;
}


@Component({
    selector: 'shop-cart',
    providers: [],
    template: ` 
                   <div>
                      <button class='btn btn-success' (click)="sendOrder()"><i class="fa fa-save"></i> Send Order </button>
                      <button class="btn btn-default" (click)="goToProducts()"><i class="fa fa-ra"></i> Back </button>
                      <span *ngFor="let st of states">
                         <i class="fa fa-arrow-circle-right"></i>{{st}}
                      </span>
                   </div>

                   <div>
                   <table class="table table-inverse">
                     <thead>
                        <tr>
                            <th>Product</th>
                            <th>Number</th>
                            <th>Price/per</th>
                            <th>Total Price</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr *ngFor="let item of (shopcart$ | async)?.items">
                          <td>{{item.title}}</td>
                          <td>{{item.count}}</td>
                          <td>{{item.price}}</td>
                          <td>{{item.count * item.price}}</td>
                        </tr>
                     </tbody>
                   </table>
                   </div>
                 `
    //styleUrls: ['/app/component/Basic/Product/Product-index.component.css']
})

export class ShopcartComponent implements OnInit {

    private shopcart$: Observable<IShopCart>;
    private order$: Observable<IOrder>;
    private states: string[] = [];

    constructor(
        private router: Router,
        private shopcartStore: Store<IShopCart>,
        private orderStore: Store<IOrder>
    ) {
        //Get the shopcart reducer
        this.shopcart$ = shopcartStore.select("shopcart");
        //this.shopcart$.subscribe(data => {
        //    console.log(data.items);
        //})

        //Get the order reducer
        this.order$ = orderStore.select("order");

    }

    ngOnInit() {

    }

    private sendOrder() {

        this.shopcart$.subscribe(data => {
            let date = new Date();
            let orderItem: Order = {
                id: '',
                status: 'Saving',
                date: date.toLocaleDateString().concat(' ', date.toLocaleTimeString()),
                items: data.items
            };

            this.orderStore.dispatch({ type: SAVE, payload: orderItem });
        });


        this.order$.subscribe(data => {

            let state = this._getState(this.orderStore);
            console.log("Adding " + state.order.status + " to array!");
            this.states.push(state.order.status);

        });
    }

    private goToProducts() {
        this.router.navigate(['Basic/Product/Index']);
    }

    private _getState(store: Store<IOrder>) {

        let state: any;
        store.take(1).subscribe(s => state = s);
        return state;
    }
}

