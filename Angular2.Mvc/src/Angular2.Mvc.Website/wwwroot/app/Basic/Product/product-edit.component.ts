/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ProductService} from './product.service';
import {Product} from '../../class/Product';


declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-edit',
    providers: [ProductService],
    templateUrl: '/app/Basic/Product/product-edit.component.html'
})

export class ProductEditComponent implements OnInit {
    title: string;
    private prod: Product;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private prodService: ProductService
    ) {
        this.title = "Products - Edit";
        this.prod = new Product();
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let prodId = params['id'];

        });
    }

    //Save!
    private save() {

    }


    //Back to list (Show list)
    private backToList() {
        this.router.navigate(['Basic/Product/Index']);
    }
}

