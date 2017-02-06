export class ShopItem {


    id: string; //Product ID
    title: string; //Product name
    count: number; //Counter
    price: number; //Cash summary

    
    public constructor(
        fields?: {
            id?: string,
            title?: string,
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