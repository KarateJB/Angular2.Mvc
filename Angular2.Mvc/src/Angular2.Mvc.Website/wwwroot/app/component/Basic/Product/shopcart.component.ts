/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import { Component, Pipe, PipeTransform, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { PUSH, PULL, CLEAR } from '../../../service/shopcart.action';
import { IShopCart } from '../../../interface/IShopCart';
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
                   <div><button class="btn btn-default" (click)="goToProducts()"><i class="fa fa-ra"></i> Back </button></div>
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
                        <tr *ngFor="let item of (shopcart | async)?.items">
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

    private shopcart: Observable<IShopCart>;

    constructor(
        private router: Router,
        private store: Store<IShopCart>
    ) {
        //Get the reducer
        this.shopcart = store.select("shopcart");
        this.shopcart.subscribe(data => {
            console.log(data.items);
        })

    }

    ngOnInit() {

    }

    private goToProducts() {
        this.router.navigate(['Basic/Product/Index']);
    }
}

