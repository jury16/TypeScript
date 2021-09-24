"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.weight;
    };
    return Product;
}());
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
var scale = new Scale();
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Apple;
}(Product));
;
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tomato;
}(Product));
;
var Banana = /** @class */ (function (_super) {
    __extends(Banana, _super);
    function Banana() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Banana;
}(Product));
;
var appleRed = new Apple('AppleRed', 3.5);
var appleGreen = new Apple('ApplGreen', 2.7);
var banana = new Banana('Banana', 5.0);
var tomato = new Tomato('Tomato', 7.2);
scale.add(appleRed);
scale.add(appleGreen);
scale.add(banana);
scale.add(tomato);
console.log("Total weight: " + scale.getSumScale() + " kilos");
console.log.apply(console, __spreadArray(['List of products: '], scale.getnameList(), false));
