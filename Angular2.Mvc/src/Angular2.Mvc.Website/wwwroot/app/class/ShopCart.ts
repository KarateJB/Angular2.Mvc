import { IShopCart } from '../interface/IShopCart';

export class ShopCart implements IShopCart {
    cnt: number;
    sum: number;

    constructor() {
        this.cnt = 0;
        this.sum = 0;
    }
}