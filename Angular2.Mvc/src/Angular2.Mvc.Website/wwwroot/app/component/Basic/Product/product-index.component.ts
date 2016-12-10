/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, Pipe, PipeTransform, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-index',
    providers: [],
    templateUrl: '/app/component/Basic/Product/product-index.component.html'
    //styleUrls: ['/app/component/Basic/Product/Product-index.component.css']
})

export class ProductIndexComponent implements OnInit {
    title: string;
    constructor(
        private router: Router
    ) {
        this.title = "Products";
    }

    ngOnInit() {

    }

    private goToCreate() {
        //JL("Angular2").debug("Redirect to create page");
        this.router.navigate(['Basic/Product/Create']);
    }
}

