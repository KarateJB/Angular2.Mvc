import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Customer } from './Tcustomer';
import { SysEvent } from './TsysEvent';


@Pipe({
    name: 'wrapEvent'
})
export class WrapEventPipe implements PipeTransform {
    transform(content: SysEvent) {

        //Remove html tags
        let msg = content.Msg;
        var rex = /(<([^>]+)>)/ig;
        msg = msg.replace(rex, "");

        //Convert date to string
        var datePipe = new DatePipe("");
        let createOn = datePipe.transform(content.CreateOn, 'yyyy/MM/dd HH:mm');

        let title = content.Title;
        let createBy = content.CreateBy;

        return createOn.concat(' [', title, '] ', createBy, ' : ', msg);
    }
}

