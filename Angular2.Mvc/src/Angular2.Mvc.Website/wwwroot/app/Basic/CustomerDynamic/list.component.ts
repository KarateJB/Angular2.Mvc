/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'customerdynamic-list',
    templateUrl: '/app/Basic/CustomerMvc/index/list.component.html'
})

export class CustomerDynamicListComponent implements OnInit {

    constructor() {
    }


    ngOnInit() {

    }

    private showMsg() {
        alert("Test!");
    }
}