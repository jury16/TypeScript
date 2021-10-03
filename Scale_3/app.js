var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Scale = /** @class */ (function () {
    function Scale(_storage) {
        this.storage = _storage;
    }
    Scale.prototype.add = function (product) {
        //console.log(product);
        this.storage.addItem(product);
    };
    Scale.prototype.getNameList = function () {
        var products = [];
        var items = this.storage.getCount();
        for (var i = 0; i < items; i++) {
            products.push(this.storage.getItem(i).getName());
        }
        ;
        return products;
    };
    Scale.prototype.getSumScale = function () {
        var sum = 0;
        var items = this.storage.getCount();
        for (var i = 0; i < items; i++) {
            sum += this.storage.getItem(i).getScale();
        }
        return sum;
    };
    return Scale;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.products.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.products[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.products.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        if (localStorage.length == 0) {
            localStorage.setItem("Scale", JSON.stringify([]));
        }
        var products = JSON.parse(localStorage.Scale);
        products.push(item);
        localStorage.Scale = JSON.stringify(products);
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var products = JSON.parse(localStorage.Scale);
        var item = products[index];
        return new Product(item.name, item.weight);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var products = JSON.parse(localStorage.Scale);
        return products.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var appleGreen = new Product("Apples Green", 3.25);
var appleYellow = new Product("Apples Yellow", 6.89);
var tomate = new Product("Tomatos", 8.54);
var banana = new Product("Bananas", 12.21);
var arrayStore = new ScalesStorageEngineArray();
var localStorageStore = new ScalesStorageEngineLocalStorage();
var arrayScale = new Scale(arrayStore);
var localStorageScale = new Scale(localStorageStore);
arrayScale.add(appleGreen);
arrayScale.add(appleYellow);
arrayScale.add(tomate);
arrayScale.add(banana);
localStorageScale.add(appleYellow);
localStorageScale.add(appleGreen);
localStorageScale.add(tomate);
localStorageScale.add(banana);
