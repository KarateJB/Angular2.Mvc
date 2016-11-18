/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from './product.service';
import {Product} from '../../class/Product';


declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-create',
    providers: [ProductService],
    templateUrl: '/app/Basic/Product/product-create.component.html'
})

export class ProductCreateComponent implements OnInit {
    title: string;
    private prod: Product;
    private prodHint: string;

    constructor(
        private router: Router,
        private prodService: ProductService
    ) {
        this.title = "Products - Create";
        this.prodHint = "";
        this.prod = new Product();
    }

    ngOnInit() {

    }
    
    //Save!
    private save() {

        
    }


    //Back to list (Show list)
    private backToList() {
        this.router.navigate(['Basic/Product/Index']);
    }
}

