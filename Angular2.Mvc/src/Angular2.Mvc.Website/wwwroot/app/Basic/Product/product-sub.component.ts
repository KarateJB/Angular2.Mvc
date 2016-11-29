/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'product-sub',
    providers: [],
    template: '<div class="btn-group" role= "group" aria-label="Basic example">'+
              '<button type="button" class="btn btn-secondary" (click)="goToBooks()">Books</button>'+
              '<button type="button" class="btn btn-secondary" (click)="goToToys()">Toys</button>' +
              '<button type="button" class="btn btn-secondary" (click)="goToMusic()">Music</button>' +
              '</div>' +
              '<router-outlet></router-outlet>'
})

export class ProductSubComponent {
    constructor(private router: Router) {
    }

    private goToBooks() {
        JL("Angular2").debug("Go to books!");
        this.router.navigate(['Basic/Product/Sub', 'Books']);
    }

    private goToToys() {
        JL("Angular2").debug("Go to toys!");
        this.router.navigate(['Basic/Product/Sub', 'Toys']);
    }

    private goToMusic() {
        JL("Angular2").debug("Go to music!");
        this.router.navigate(['Basic/Product/Sub', 'Music']);
    }
}

