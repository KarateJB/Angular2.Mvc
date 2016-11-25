﻿/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit, Inject, ElementRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {CustomerMvcCreateComponent} from '../create/customermvc-create.component';
import { CustomerMvcTestComponent } from './customermvc-test.component';
import { ComponentOutlet } from '../../../directive/component-outlet.directive';
import {RestUriService} from '../../../service/resturi.service';

declare var swal: any;


@Component({
    selector: 'customermvc-index',
    providers: [ RestUriService],
    //templateUrl: '/app/Basic/CustomerMvc/index/customermvc-index.component.html'
    //template: `<div *componentOutlet="template; context: self; selector:'my-test'"></div>`,
    template: `
    <div>
      <div component-outlet selector="customermvc-test"></div>
    </div>
  `,
})

export class CustomerMvcIndexComponent implements OnInit {
    private title: string;
    private template: string;
    private self = this;

    constructor(
        //@Inject(ElementRef) _elementRef: ElementRef,
        private elementRef: ElementRef) {

        this.title = "Customer - Index";
       // this.template = `<div><p>Dynamic Component</p></div>
       //                  <div><input type="button" value="Click" class="btn btn-default" (click)="showMsg()"/></div>

       //`;
    }


    ngOnInit() {

    }

    private showMsg() {
        alert("Test!");
    }

}