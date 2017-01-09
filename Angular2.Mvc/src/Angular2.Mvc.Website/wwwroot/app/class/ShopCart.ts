import { IShopCart } from '../interface/IShopCart';
import { ShopItem } from '../class/ShopItem';

export class ShopCart implements IShopCart {
    items: ShopItem[];
    cnt: number;
    sum: number;

    constructor() {
        this.items = [];
        this.cnt = 0;
        this.sum = 0;
    }
}