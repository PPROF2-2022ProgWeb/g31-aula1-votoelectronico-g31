import { Product } from "./Product"

export class CartItem {
    addedOn : Date=new Date();
    quantity : number=0;
    product : Product=new Product();
    totalPrice : Number=0;
}