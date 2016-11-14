/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../class/Product';
import {ProductService} from './product.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-toys',
    providers: [ProductService],
    templateUrl: '/app/Basic/Product/product-toys.component.html'
    //styleUrls: ['/app/Basic/Product/Product-index.component.css']
})

export class ProductToysComponent implements OnInit {
    private title: string;
    private toys: Product[];
    constructor(
        private router: Router,
        private productService: ProductService
    ) {
        this.title = "Toys";
        this.productService = productService;
    }

    ngOnInit() {
        this.initToys();
    }

    //Initialize books
    private initToys() {
        this.productService.getToys().then(data => {
            this.toys = data;
        })
    }

}

