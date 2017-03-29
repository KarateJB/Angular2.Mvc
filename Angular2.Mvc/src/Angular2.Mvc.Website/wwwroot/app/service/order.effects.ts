import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ShopItem } from '../class/ShopItem';
import { Order } from '../class/Order';
import { SAVE, SAVED, CANCEL, CANCELLED, COMPLETE } from './order.action';
import { OrderService } from '../component/Basic/Product/order.service';
import { Utility } from '../class/utility';


@Injectable()
export class orderEffects {

    constructor(
        private action$: Actions,
        private orderService: OrderService
    ) { }


    @Effect() save$ = this.action$
        .ofType(SAVE)
        .switchMap((action) => {


            let payload: Order = {
                id: Utility.generateUUID(),
                status: "Saved!!",
                date: action.payload.date,
                items: action.payload.items
            };

            //Save the order to backend, database ...etc Or get something
            return this.orderService.save(payload).delay(1000).switchMap(() => {
                return Observable.of({ 'type': SAVED, 'payload': payload });
            });

        });

    @Effect() saved$ = this.action$
        .ofType(SAVED).delay(1000)
        .switchMap((action) => {
            action.payload.status = "Completed";
            return Observable.of({ 'type': COMPLETE, 'payload': action.payload });
        });


}