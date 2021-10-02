var Scale = /** @class */ (function () {
    function Scale() {
        this.products = [];
    }
    Scale.prototype.add = function (product) {
        this.products.push(product);
    };
    Scale.prototype.getnameList = function () {
        var productsNames = [];
        this.products.forEach(function (item) {
            productsNames.push(item.getName());
        });
        return productsNames;
    };
    Scale.prototype.getSumScale = function () {
        var sum = 0;
        this.products.forEach(function (item) {
            sum += item.getScale();
        });
        return sum;
    };
    return Scale;
}());
var Apple = /** @class */ (function () {
    function Apple(_weight) {
        this.weight = _weight;
        this.name = 'apples';
    }
    Apple.prototype.getName = function () {
        return this.name;
    };
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_weight) {
        this.weight = _weight;
        this.name = 'tomatos';
    }
    Tomato.prototype.getName = function () {
        return this.name;
    };
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    return Tomato;
}());
var Banana = /** @class */ (function () {
    function Banana(_weight) {
        this.weight = _weight;
        this.name = 'bananas';
    }
    Banana.prototype.getName = function () {
        return this.name;
    };
    Banana.prototype.getScale = function () {
        return this.weight;
    };
    return Banana;
}());
var scale = new Scale();
var appleRed = new Apple(3.5);
var appleGreen = new Apple(2.7);
var banana = new Banana(5.0);
var tomato = new Tomato(7.2);
scale.add(appleRed);
scale.add(appleGreen);
scale.add(banana);
scale.add(tomato);
console.log("Total weight: " + scale.getSumScale() + " kilos");
