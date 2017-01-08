export class ShopItem {
    count: number; //Counter
    price: number; //Cash summary

    
    public constructor(
        fields?: {
            count?: number,
            price?: number
        }) {
        if (fields) {
            Object.assign(this, fields);
        }
        else {
            this.count = 0;
            this.price = 0;
        }
    }
}