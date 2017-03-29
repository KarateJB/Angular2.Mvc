/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { Product } from '../../../class/Product';
import { ProductService } from './product.service';
import { ProductBookingComponent } from './product-booking.component';
import { IShopCart } from '../../../interface/IShopCart';
import { ShopCart } from '../../../class/ShopCart';
import { ShopItem } from '../../../class/ShopItem';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';


declare var swal: any; //SweetAlert2 typings definition



@Component({
    selector: 'product-books',
    templateUrl: '/app/component/Basic/Product/product-books.component.html'
    //styleUrls: ['/app/component/Basic/Product/Product-index.component.css']
})

export class ProductBooksComponent implements OnInit {
    private title: string;
    private toastrOptions: ToastOptions;
    private books: Product[];

    private itemNumbers: any;
    private shopcart: Observable<IShopCart>;

    constructor(
        private router: Router,
        private productService: ProductService,
        private store: Store<IShopCart>,
        private toastr: ToastsManager,
        private vRef: ViewContainerRef) {

        this.title = "Books";
        this.itemNumbers = {};
        this.toastr.setRootViewContainerRef(vRef);

        this.productService = productService;

        //Get the reducer
        this.shopcart = store.select("shopcart");
    }

    ngOnInit() {
        this.initBooks();
        this.initToastrOptions();
    }

    //Initialize books
    private initBooks() {
        this.productService.getBooks().then(data => {
            this.books = data;

            //Use shopping cart to update data
            this.shopcart.subscribe(cart => {
                this.books.forEach(item => {
                    let storeItem = cart.items.find(x => x.id === item.Id);
                    if (!storeItem) {
                        this.itemNumbers[item.Id] = 0;
                    }
                    else {
                        this.itemNumbers[item.Id] = storeItem.count;
                    }
                });
            })

        })
    }

    //Set ng2-toastr options
    private initToastrOptions() {

        this.toastrOptions = new ToastOptions({
            dismiss: 'auto',
            animate: 'flyRight',
            positionClass: 'toast-bottom-right',
        });
    }

    //Go to edit page
    private edit(prod: Product) {
        this.router.navigate(['Basic/Product/Edit', prod.Id]);
    }

    //Remove the product
    private remove(prod: Product) {

        let service = this.productService;
        let books = this.books;

        swal({
            title: 'Are you sure?',
            text: "The product : " + prod.Title + ", will be deleted!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function () {

            service.remove(prod).then(
                () => {
                    //Remove item in Front-end
                    var index = books.indexOf(prod);
                    books.splice(index, 1);
                });

        })
    }


    private setShopCart(data: ShopCart) {
        this.toastr.info(data.cnt + ' items, total $' + data.sum, 'Shopping Cart', this.toastrOptions);
    }


}

