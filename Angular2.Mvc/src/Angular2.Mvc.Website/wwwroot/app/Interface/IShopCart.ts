import { ShopItem } from '../class/ShopItem';

export interface IShopCart {
    items: ShopItem[];
    cnt: number; //Counter
    sum: number; //Cash summary
}