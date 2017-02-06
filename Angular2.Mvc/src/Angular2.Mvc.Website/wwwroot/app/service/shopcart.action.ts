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
            return pushToCart(state, action.payload);

        case PULL:
            return pullFromCart(state, action.payload);

        case CLEAR:
            state.cnt = 0;
            state.sum = 0;
            state.items = [];
            return state;

        default:
            return state;
    }
}


function pushToCart(shopcart: ShopCart, payload: ShopItem) {
    shopcart.cnt += 1;
    shopcart.sum += payload.price * 1;
    updateItems(shopcart, payload);
    console.log(shopcart.items);
    return shopcart;
}

function pullFromCart(shopcart: ShopCart, payload: ShopItem) {
    shopcart.cnt -= 1;
    shopcart.sum -= payload.price * 1;
    updateItems(shopcart, payload);
    console.log(shopcart.items);
    return shopcart;
}


function updateItems(shopcart: ShopCart, payload: ShopItem) {
    let targetItem = shopcart.items.find(item => item.id === payload.id);
    if (targetItem) { //Exist
        if (payload.count <= 0) {
            var index = shopcart.items.indexOf(targetItem);
            shopcart.items.splice(index, 1);
        }
        else {
            targetItem.count = payload.count;
        }
    }
    else { //First time adding to shopping cart
        shopcart.items.push(payload);
    }
}