/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../class/Product';
import {ProductService} from './product.service';

declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-music',
    providers: [ProductService],
    templateUrl: '/app/Basic/Product/product-music.component.html'
    //styleUrls: ['/app/Basic/Product/Product-index.component.css']
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
}

