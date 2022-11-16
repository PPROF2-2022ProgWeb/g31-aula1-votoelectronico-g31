
export class Product {
    id : Number=0;
    name : string="";
    description : string="";
    price : Number=0;
    addedOn : Date=new Date();
    image? :Blob=new Blob([]);
    imageUrl : string="";
}