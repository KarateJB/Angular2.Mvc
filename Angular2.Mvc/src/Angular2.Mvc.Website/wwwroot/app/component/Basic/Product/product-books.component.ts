/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../class/Product';
import { ShopCart } from '../../../class/ShopCart';
import { ProductService } from './product.service';
import { ProductBookingComponent } from './product-booking.component';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';


declare var swal: any; //SweetAlert2 typings definition


interface AppState {
    counter: number;
}


@Component({
    selector: 'product-books',
    templateUrl: '/app/component/Basic/Product/product-books.component.html'
    //styleUrls: ['/app/component/Basic/Product/Product-index.component.css']
})

export class ProductBooksComponent implements OnInit {
    private title: string;
    private toastrOptions: ToastOptions;
    private books: Product[];

    constructor(
        private router: Router,
        private productService: ProductService,
        private toastr: ToastsManager,
        private vRef: ViewContainerRef) {

        this.title = "Books";
        this.toastr.setRootViewContainerRef(vRef);

        this.productService = productService;

        JL("Angular2").debug("Come to BooksComponent!");
    }

    ngOnInit() {
        this.initBooks();
        this.initToastrOptions();
    }

    //Initialize books
    private initBooks() {
        this.productService.getBooks().then(data => {
            this.books = data;
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

