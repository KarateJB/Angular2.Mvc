/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'product-sub',
    providers: [],
    template: '<div class="btn-group" role= "group" aria-label="Basic example">'+
              '<button type="button" class="btn btn-secondary" (click)="goToBooks()">Books</button>'+
              '<button type="button" class="btn btn-secondary" (click)="goToToys()">Toys</button>' +
              '<button type="button" class="btn btn-secondary" (click)="goToMusic()">Music</button>'+
              '</div>' +
              '<router-outlet></router-outlet>'
})


//...
export class ProductSubComponent {
    constructor(private router: Router) {
    }

    private goToBooks() {
        this.router.navigate(['Basic/Product/Sub', 'Books']);
    }

    private goToToys() {
        this.router.navigate(['Basic/Product/Sub', 'Toys']);
    }

    private goToMusic() {
        this.router.navigate(['Basic/Product/Sub', 'Music']);
    }
}

