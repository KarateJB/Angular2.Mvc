/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit, Inject, ElementRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { ComponentOutlet } from '../../../directive/component-outlet.directive';
import {RestUriService} from '../../../service/resturi.service';

declare var swal: any;


@Component({
    selector: 'customermvc-index',
    providers: [ RestUriService],
    //templateUrl: '/app/component/Basic/CustomerMvc/index/customermvc-index.component.html'
    //template: `<div *componentOutlet="template; context: self; selector:'my-test'"></div>`,
    template: `
    <div class="form-group row" style="max-width:70%">
        <div class="col-sm-3"><input type="text" class="form-control" [(ngModel)]="maxDisplayNum" value="" /></div>
        <div class="col-sm-3"><button class="btn btn-default" (click)="showLists()"><i class="fa fa-list"></i>&nbsp;Show Lists</button></div>
        <div class="col-sm-3"><button class="btn btn-default" (click)="showCards()"><i class="fa fa-vcard"></i>&nbsp;Show Cards</button></div>
    </div>
    <hr />
    <div>
      <div component-outlet [selector]="component" [inputValue]="maxDisplayNum"></div>
    </div>
  `,
})

export class CustomerDynamicIndexComponent implements OnInit {
    private component: string;
    constructor() {
        //this.component = "customerdynamic-list"; //or "customerdynamic-card"
    }


    ngOnInit() {

    }

    private showLists() {
        this.component = "customerdynamic-list";
    }

    private showCards() {
        this.component = "customerdynamic-card";
    }

}