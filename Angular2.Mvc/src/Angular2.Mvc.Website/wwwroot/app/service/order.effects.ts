import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ShopItem } from '../class/ShopItem';
import { Order } from '../class/Order';
import { SAVE, SAVED, CANCEL, CANCELLED, COMPLETE } from './order.action';
import { Utility } from '../service/utility';

@Injectable()
export class orderEffects {

    constructor(
        private action$: Actions,
        private utility: Utility
    ) { }


    @Effect() save$ = this.action$
        .ofType(SAVE)
        .switchMap((action) => {


            let payload: Order = {
                id: this.utility.generateUUID(),
                status: SAVED,
                date: new Date().toLocaleDateString(),
                items: action.payload.items
            };

            //Save the order to backend, database ...etc Or get something

            return Observable.of({'type': SAVED, 'payload': payload });
        });


}