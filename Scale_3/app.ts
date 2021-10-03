interface IStorageEngine {
    addItem(item: Product): void;
    getItem(index: number): Product;
    getCount(): number;
}

class Product {
    private weight: number;
    private name: string;
    constructor(_name: string, _weight: number) {
        this.name = _name;
        this.weight = _weight;
    }
    getScale() {
        return this.weight;
    }
    getName() {
        return this.name;
    }
    
}
  
class Scale <StorageEngine extends IStorageEngine>{
    private storage: StorageEngine;
    constructor(_storage:StorageEngine){
        this.storage = _storage;
    }
    add(product: Product):void{
        //console.log(product);
        this.storage.addItem(product);
    }
    getNameList(): string[]{
        let products: Array<string> = [];
        let items = this.storage.getCount();
        for(let i = 0; i < items; i++) {
            products.push(this.storage.getItem(i).getName());
        };
        return products;
    }
    getSumScale(): number{
        let sum: number = 0;
        let items = this.storage.getCount();
        for(let i = 0; i < items; i++){
            sum += this.storage.getItem(i).getScale();
        }
        return sum;
    }
  
}
class ScalesStorageEngineArray implements IStorageEngine {
    private products: Array<Product> = [];
  
    addItem(item: Product): void {
      this.products.push(item);
    }
  
    getItem(index: number): Product {
      return this.products[index];
    }
  
    getCount(): number {
        return this.products.length;
    }
  }

  class ScalesStorageEngineLocalStorage implements IStorageEngine {
    addItem(item: Product): void {
      if (localStorage.length == 0) {
        localStorage.setItem("Scale", JSON.stringify([]));
      }
      let products: Array<Product> = JSON.parse(localStorage.Scale);
      products.push(item);
      
      localStorage.Scale = JSON.stringify(products);
    }
  
    getItem(index: number): Product {
      let products: Array<Product> = JSON.parse(localStorage.Scale);
      let item: any = products[index];  
      return new Product(item.name, item.weight);
    }
  
    getCount(): number {
      let products: Array<Product> = JSON.parse(localStorage.Scale);
      return products.length;
    }
  }
  const appleGreen: Product = new Product("Apples Green", 3.25);
  const appleYellow: Product = new Product("Apples Yellow", 6.89);
  const tomate: Product = new Product("Tomatos", 8.54);
  const banana: Product = new Product("Bananas", 12.21);
  
  const arrayStore = new ScalesStorageEngineArray();
  const localStorageStore = new ScalesStorageEngineLocalStorage();
  const arrayScale = new Scale<ScalesStorageEngineArray>(arrayStore);
  const localStorageScale = new Scale<ScalesStorageEngineLocalStorage>(localStorageStore);
  arrayScale.add(appleGreen);
  arrayScale.add(appleYellow);
  arrayScale.add(tomate);
  arrayScale.add(banana);  
  localStorageScale.add(appleYellow);
  localStorageScale.add(appleGreen);
  localStorageScale.add(tomate);
  localStorageScale.add(banana);

