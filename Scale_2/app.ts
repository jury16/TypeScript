interface IScalable {
    getName():string;  
    getScale():number;  
}

class Scale{
    products: IScalable[];
    constructor(){
        this.products = [];
    }
    add(product: IScalable):void{
        this.products.push(product);
    }
    getnameList(): string[]{
        let productsNames: string[]= [];
        this.products.forEach((item: IScalable) => {
            productsNames.push(item.getName())
        });
        return productsNames;
    }
    getSumScale(): number{
        let sum: number = 0;
        this.products.forEach((item: IScalable) =>{
            sum += item.getScale();
        })
        return sum;
    }
  
}
class Apple implements IScalable{
    weight: number;
    name: string;
    constructor(_weight:number){
        this.weight = _weight;
        this.name = 'apples';
    }
    getName():string{
        return this.name;
    }
    getScale():number{
        return this.weight;
    }
}
class Tomato implements IScalable{
    weight: number;
    name: string;
    constructor(_weight:number){
        this.weight = _weight;
        this.name = 'tomatos';
    }
    getName():string{
        return this.name;
    }
    getScale():number{
        return this.weight;
    }
}
class Banana implements IScalable{
    weight: number;
    name: string;
    constructor(_weight:number){
        this.weight = _weight;
        this.name = 'bananas';
    }
    getName():string{
        return this.name;
    }
    getScale():number{
        return this.weight;
    }
}

let scale: Scale = new Scale();

let appleRed: Apple = new Apple(3.5);
let appleGreen: Apple = new Apple(2.7);
let banana: Banana = new Banana(5.0);
let tomato: Tomato = new Tomato(7.2);
scale.add(appleRed);
scale.add(appleGreen);
scale.add(banana);
scale.add(tomato);

console.log(`Total weight: ${scale.getSumScale()} kilos`);
