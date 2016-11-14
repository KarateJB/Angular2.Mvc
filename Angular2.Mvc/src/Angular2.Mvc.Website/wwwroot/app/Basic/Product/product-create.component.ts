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

    constructor(
        private router: Router,
        private prodService: ProductService
    ) {
        this.title = "Products - Create";
        this.prod = new Product();
    }

    ngOnInit() {

    }

    //Save!
    private save() {
        this.prodService.create(this.prod).then(
            () => {

                var rt = this.router;
                swal(
                    'Success!',
                    'The data has been saved.',
                    'success'
                ).then(function () {
                    //Return to Index
                    rt.navigate(['Basic/Product/Index']);
                });

            });
    }


    //Back to list (Show list)
    private backToList() {
        this.router.navigate(['Basic/Product/Index']);
    }
}

