/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit} from '@angular/core';

declare var swal: any;

@Component({
    selector: 'customer-createmvc',
    providers: [],
    templateUrl: '/app/Basic/CustomerMvc/create/customermvc-create.component.html'
})

export class CustomerMvcCreateComponent implements OnInit {

    constructor() {

        JL("Angular2").debug("Creating CustomerMvcCreateComponent!");
    }

    ngOnInit() {

    }

    //Save!
    private save() {
        JL("Angular2").debug("Saving!");
        (<HTMLFormElement>document.getElementById("createForm")).submit();
    }
}