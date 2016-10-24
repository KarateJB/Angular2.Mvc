import { Pipe, PipeTransform,Inject, LOCALE_ID } from '@angular/core';
import { DatePipe } from '@angular/common';
import {Customer} from '../../class/Customer';
import {SysEvent} from '../../class/SysEvent';


@Pipe({
    name: 'wrapEvent'
})

export class WrapEventPipe implements PipeTransform {

    constructor( @Inject(LOCALE_ID) private _locale: string) {

    }

    transform(content: SysEvent) {

        //Remove html tags
        let msg = content.Msg;
        var rex = /(<([^>]+)>)/ig;
        msg = msg.replace(rex, "");

        //Convert date to string
        var datePipe = new DatePipe(this._locale);
        let createOn = datePipe.transform(content.CreateOn, 'yyyy/MM/dd HH:mm');

        let title = content.Title;
        let createBy = content.CreateBy;

        return createOn.concat(' [', title, '] ', createBy, ' : ', msg);
    }
}

