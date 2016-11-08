import {Component, Pipe, PipeTransform, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-index',
    providers: [],
    templateUrl: '/app/Basic/Product/Product-index.component.html'
    //styleUrls: ['/app/Basic/Product/Product-index.component.css']
})

export class ProductIndexComponent implements OnInit {
    title: string;
    constructor(
        private router: Router) {
        this.title = "Products";
    }

    ngOnInit() {
    }

}

