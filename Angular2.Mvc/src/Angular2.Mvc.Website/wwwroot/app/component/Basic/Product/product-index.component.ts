/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, Pipe, PipeTransform, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../../../service/counter.action';

declare var swal: any; //SweetAlert2 typings definition


interface AppState {
    counter: number;
}


@Component({
    selector: 'product-index',
    providers: [],
    templateUrl: '/app/component/Basic/Product/product-index.component.html'
    //styleUrls: ['/app/component/Basic/Product/Product-index.component.css']
})

export class ProductIndexComponent implements OnInit {
    private title: string;
    private counter: Observable<number>;

    constructor(
        private router: Router,
        private store: Store<AppState>
    ) {
        this.title = "Products";
        this.counter = store.select("counter");
        console.log(this.counter);
    }

    ngOnInit() {
        
    }

    private increment() {
        this.store.dispatch({ type: INCREMENT });

    }

    private decrement() {
        this.store.dispatch({ type: DECREMENT });

    }

    private goToCreate() {
        //JL("Angular2").debug("Redirect to create page");
        this.router.navigate(['Basic/Product/Create']);
    }
    
}

