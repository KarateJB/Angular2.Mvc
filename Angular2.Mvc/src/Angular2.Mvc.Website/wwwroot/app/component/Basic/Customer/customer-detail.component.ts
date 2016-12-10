import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Customer} from '../../../class/Customer';
import {SysEvent} from '../../../class/SysEvent';

@Component({
    selector: 'customer-detail',
    templateUrl: '/app/component/Basic/Customer/customer-detail.component.html',
    styleUrls: ['/app/component/Basic/Customer/customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

    @Input('selectedCustomer') customer: Customer; 
    @Output('emit-events') emitEvents = new EventEmitter<SysEvent[]>(true); //Must set the EventEmitter to async

    constructor() {
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