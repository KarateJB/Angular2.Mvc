/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, Pipe, PipeTransform, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'product-index',
    providers: [],
    templateUrl: '/app/Basic/Product/product-index.component.html'
    //styleUrls: ['/app/Basic/Product/Product-index.component.css']
})

export class ProductIndexComponent implements OnInit {
    title: string;
    constructor(
        private router: Router
    ) {
        this.title = "Products - index";
    }

    ngOnInit() {

    }

    private goToCreate() {
        this.router.navigate(['Basic/Product/Create']);
    }
}

