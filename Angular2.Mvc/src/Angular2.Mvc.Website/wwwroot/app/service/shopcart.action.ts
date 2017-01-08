import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Action, ActionReducer } from '@ngrx/store';
import { IShopCart } from '../interface/IShopCart';
import { ShopCart } from '../class/ShopCart';
import { ShopItem } from '../class/ShopItem';

export const PUSH = 'PUSH';
export const PULL = 'PULL';
export const CLEAR = 'CLEAR';

export const shopcartReducer: ActionReducer<IShopCart> = (state: ShopCart = new ShopCart(), action: Action) => {
    switch (action.type) {
        case PUSH:
            console.log('shopcartReducer: INCREMENT');
            return pushToCart(state, action.payload);

        case PULL:
            return pullFromCart(state, action.payload);

        case CLEAR:
            state.cnt = 0;
            state.sum = 0;
            return state;

        default:
            return state;
    }
}


export function pushToCart(shopcart: ShopCart, payload: ShopItem) {
    shopcart.cnt += 1;
    shopcart.sum += payload.price * 1;

    console.log(shopcart);

    return shopcart;
}

export function pullFromCart(shopcart: ShopCart, payload: ShopItem) {
    shopcart.cnt -= 1;
    shopcart.sum -= payload.price * 1;
    return shopcart;
}