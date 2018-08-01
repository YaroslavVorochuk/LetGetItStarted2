export class Item {
    name: string;
    fullName: string;
    imgSrc: string;
    price: number;

    constructor (name, fullName, imgSrc, price){
        this.name = name;
        this.fullName = fullName;
        this.imgSrc = imgSrc;
        this.price = price;
     }
}
