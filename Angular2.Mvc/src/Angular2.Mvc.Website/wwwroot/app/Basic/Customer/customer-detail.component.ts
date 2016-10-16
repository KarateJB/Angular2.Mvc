import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Customer} from './Tcustomer';
import {SysEvent} from './TsysEvent';

@Component({
    selector: 'customer-detail',
    templateUrl: '/app/Basic/Customer/customer-detail.component.html',
    styleUrls: ['/app/Basic/Customer/customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

    @Input('selectedCustomer') customer: Customer; 
    @Output('emit-events') emitEvents = new EventEmitter<SysEvent[]>();

    constructor() {
        console.log("Initialize Customer detail");
    }

    ngOnInit() {

        //Emit event
        let evts: SysEvent[] = [
            new SysEvent({
                Title: "Info",
                Msg: "is looking at " + this.customer.Name + "'s information.",
                CreateBy: "JB",
                CreateOn: new Date()
            })
        ];
        this.emitEvents.emit(evts);

    }
}