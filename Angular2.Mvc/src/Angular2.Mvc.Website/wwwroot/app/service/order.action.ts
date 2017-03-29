import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Action, ActionReducer } from '@ngrx/store';
import { IOrder } from '../interface/IOrder';
import { Order } from '../class/Order';
import { ShopItem } from '../class/ShopItem';

export const SAVE = 'SAVE';
export const SAVED = 'SAVED';
export const CANCEL = 'CANCEL';
export const CANCELLED = 'CANCELLED';
export const COMPLETE = 'COMPLETE';

export const orderReducer: ActionReducer<IOrder> = (state: Order = new Order(), action: Action) => {

    switch (action.type) {
     
        case SAVE:
            console.log('The order is saving!!');
            state = action.payload;
            console.log(state);
            return state;

        case SAVED:
            console.log('The order is saved!!');
            state = action.payload;
            console.log(state);
            return state;

        case CANCEL:
            return state;

        case CANCELLED:
            return state;

        case COMPLETE:
            console.log('The order is completed!');
            state.status = "Complete";
            return state;

        default:
            return state;
    }
}

