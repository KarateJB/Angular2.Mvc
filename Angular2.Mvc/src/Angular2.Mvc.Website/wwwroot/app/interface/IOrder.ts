import { ShopItem } from '../class/ShopItem';

export interface IOrder {
    id: string;
    status: string;
    date: string;
    items: ShopItem[];
}