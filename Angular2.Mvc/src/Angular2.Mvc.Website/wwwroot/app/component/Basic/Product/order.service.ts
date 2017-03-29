/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import { Order } from '../../../class/Order';
import { Utility } from '../../../class/Utility';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

declare var swal: any; //SweetAlert2 typings definition


@Injectable()
export class OrderService {

    constructor(
        //@Inject(FirebaseApp) private firebaseApp: any,
        private af: AngularFire) {

    }

    //Query data from firebase
    private _queryOrders() {

        this.af.auth.subscribe(
            user => {
                if (!user) {
                    swal("Error", "Please login ... ", "error");
                }
            },
            error => JL("Angular2").error(error)
        );

        return this.af.database.object('/Demo/orders');
    }



    //Save new order
    public save(order: Order): Observable<void> {

        console.log("Saving to firebase!");

        var promise = new Promise(
            resolve => {
                let observable$ = this._queryOrders();
                let current = null;
                 observable$.subscribe(value => {
                    current = value;
                    current.push(order);
                    resolve(current);
                })
            }).then((newValue) => {
                //console.log(newValue);
                let itemObservable = this._queryOrders();
                itemObservable.update(newValue);
            });

        return Observable.fromPromise(promise);
    }




}

