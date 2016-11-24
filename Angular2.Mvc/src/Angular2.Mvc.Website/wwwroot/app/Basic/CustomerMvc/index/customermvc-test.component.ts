/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'customermvc-test',
    templateUrl: '/app/Basic/CustomerMvc/index/customermvc-test.component.html'
})

export class CustomerMvcTestComponent implements OnInit {

    constructor() {
    }


    ngOnInit() {

    }

    private showMsg() {
        alert("Test!");
    }
}