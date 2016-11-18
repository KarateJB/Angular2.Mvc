/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../class/Product';
import {ProductService} from './product.service';

declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-books',
    providers: [ProductService],
    templateUrl: '/app/Basic/Product/product-books.component.html'
    //styleUrls: ['/app/Basic/Product/Product-index.component.css']
})

export class ProductBooksComponent implements OnInit {
    private title: string;
    private books: Product[];
    constructor(
        private router: Router,
        private productService: ProductService
    ) {
        this.title = "Books";
        this.productService = productService;
        JL("Angular2").debug("Come to BooksComponent!");
    }

    ngOnInit() {
        this.initBooks();
    }

    //Initialize books
    private initBooks() {
        this.productService.getBooks().then(data => {
            this.books = data;
        })
    }
}

