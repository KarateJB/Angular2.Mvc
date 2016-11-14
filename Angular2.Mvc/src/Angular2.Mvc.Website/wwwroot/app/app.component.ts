import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'core-app',
    template: '<h3>Hello world!</h3>'
})
export class AppComponent implements OnInit {

    //private items: any[];
    private items: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {

        af.database.list('/Demo').subscribe(val => {
            console.log(val);
        });

    }
    ngOnInit() {
    }
}  