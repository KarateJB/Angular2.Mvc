/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../../class/Product';
import {ProductService} from './product.service';

declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-music',
    providers: [ProductService],
    templateUrl: '/app/component/Basic/Product/product-music.component.html'
    //styleUrls: ['/app/component/Basic/Product/Product-index.component.css']
})

export class ProductMusicComponent implements OnInit {
    private title: string;
    private music: Product[];
    constructor(
        private router: Router,
        private productService: ProductService
    ) {
        this.title = "Music";
        this.productService = productService;
    }

    ngOnInit() {
        this.initMusic();
    }

    //Initialize books
    private initMusic() {
        this.productService.getMusic().then(data => {
            this.music = data;
        })
    }

    //Go to edit page
    private edit(prod: Product) {
        this.router.navigate(['Basic/Product/Edit', prod.Id]);
    }

    //Remove the product
    private remove(prod: Product) {

        let service = this.productService;
        let music = this.music;

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
                    var index = music.indexOf(prod);
                    music.splice(index, 1);
                });

        })


    }

}

