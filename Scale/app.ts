class Product{
    name: string;
    weight: number;

    constructor(_name:string, _weight:number){
        this.name = _name;
        this.weight =_weight;
    }
    getName():string{
        return this.name;
    }
    getScale(): number{
        return this.weight;
    }
}
class Scale{
    products: Product[];
    constructor(){
        this.products = [];
    }
    add(product: Product){
        this.products.push(product);
    }
    getnameList(): string[]{
        let productsNames: string[]= [];
        this.products.forEach((item) => {
            productsNames.push(item.getName())
        });
        return productsNames;
    }
    getSumScale(): number{
        let sum: number = 0;
        this.products.forEach((item) =>{
            sum += item.getScale();
        })
        return sum;
    }
}
let scale: Scale = new Scale();
class Apple extends Product{};
class Tomato extends Product{};
class Banana extends Product{};
let appleRed: Apple = new Apple('AppleRed', 3.5);
let appleGreen: Apple = new Apple('ApplGreen', 2.7);
let banana: Banana = new Banana('Banana', 5.0);
let tomato: Tomato = new Tomato('Tomato', 7.2);
scale.add(appleRed);
scale.add(appleGreen);
scale.add(banana);
scale.add(tomato);
console.log(`Total weight: ${scale.getSumScale()} kilos`);
console.log('List of products: ', ...scale.getnameList());
