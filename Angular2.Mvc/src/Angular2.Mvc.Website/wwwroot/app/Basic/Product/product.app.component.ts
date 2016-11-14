import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'product-app',
    template: '<router-outlet></router-outlet>'
})
export class ProductAppComponent implements OnInit {
    ngOnInit() {
    }
}  

