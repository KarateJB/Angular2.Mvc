/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
    selector: 'product-edit',
    templateUrl: '/app/Basic/Product/product-edit.component.html'
})

export class ProductEditComponent implements OnInit {
    title: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.title = "Products - Edit";
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

