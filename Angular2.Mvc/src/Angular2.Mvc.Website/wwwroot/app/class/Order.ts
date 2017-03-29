import { IOrder } from '../interface/IOrder';
import { ShopItem } from '../class/ShopItem';

export class Order implements IOrder {
    id: string;
    status: string;
    date: string;
    items: ShopItem[];

    constructor() {
        this.date = new Date().toLocaleDateString();
        this.items = [];
    }
}