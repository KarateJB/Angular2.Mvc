/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../../class/Product';
import {ProductService} from './product.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-toys',
    providers: [ProductService],
    templateUrl: '/app/component/Basic/Product/product-toys.component.html'
    //styleUrls: ['/app/component/Basic/Product/Product-index.component.css']
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

    //Go to edit page
    private edit(prod: Product) {
        this.router.navigate(['Basic/Product/Edit', prod.Id]);
    }

    //Remove the product
    private remove(prod: Product) {

        let service = this.productService;
        let toys = this.toys;

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
                    var index = toys.indexOf(prod);
                    toys.splice(index, 1);
                });

        })


    }

}

