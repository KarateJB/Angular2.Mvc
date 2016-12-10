/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit, Inject, ElementRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { CustomerDynamicListComponent } from './list.component';
import { ComponentOutlet } from '../../../directive/component-outlet.directive';
import {RestUriService} from '../../../service/resturi.service';

declare var swal: any;


@Component({
    selector: 'customermvc-index',
    providers: [ RestUriService],
    //templateUrl: '/app/component/Basic/CustomerMvc/index/customermvc-index.component.html'
    //template: `<div *componentOutlet="template; context: self; selector:'my-test'"></div>`,
    template: `
    <div>
      <div component-outlet selector="{{component}}"></div>
    </div>
  `,
})

export class CustomerDynamicIndexComponent implements OnInit {
    private title: string;
    private component: string;
    private self = this;

    constructor() {

        this.title = "Customer - Index";
        this.component = "customerdynamic-card"; //or "customerdynamic-list"
    }


    ngOnInit() {

    }

    private showMsg() {
        alert("Test!");
    }

}