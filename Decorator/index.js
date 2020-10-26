var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//this abstract class will hold the methods that the other subclasses will have
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
//now we define the decorator, this decorator is a Product and has Product.
//this is the main wrapper, but it is also optional you can just move to the different decorators
var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Decorator.prototype.getDescription = function () {
        return this.description;
    };
    Decorator.prototype.getCost = function () {
        return this.cost;
    };
    return Decorator;
}(Product));
//then with the decorator we will define the specific characteristics that can be used in concrete products
//These are the secondary wrappers, but these wrappers may change
var strawberryDecorator = /** @class */ (function (_super) {
    __extends(strawberryDecorator, _super);
    function strawberryDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    strawberryDecorator.prototype.getDescription = function () {
        return ' also with strawberries';
    };
    strawberryDecorator.prototype.getCost = function () {
        return 5;
    };
    return strawberryDecorator;
}(Decorator));
var germanyDecorator = /** @class */ (function (_super) {
    __extends(germanyDecorator, _super);
    function germanyDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    germanyDecorator.prototype.getDescription = function () {
        return ' also coming from germany';
    };
    germanyDecorator.prototype.getCost = function () {
        return 15;
    };
    return germanyDecorator;
}(Decorator));
/*
 *Instead of having a single class defining if a type of product is different
 *we design one decorator to communicate with the different characteristics and assining
 *them to an specific product we will see this example below
 */
//these classes are the base line classes
var Yogurt = /** @class */ (function (_super) {
    __extends(Yogurt, _super);
    function Yogurt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Yogurt.prototype.getDescription = function () {
        return 'Quality yogurt with deep flavor' + strawberryDecorator.prototype.getDescription();
    };
    Yogurt.prototype.getCost = function () {
        return 15 + strawberryDecorator.prototype.getCost();
    };
    return Yogurt;
}(Product));
var Beer = /** @class */ (function (_super) {
    __extends(Beer, _super);
    function Beer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Beer.prototype.getDescription = function () {
        return 'Quality beer with freshing feeling' + germanyDecorator.prototype.getDescription();
    };
    Beer.prototype.getCost = function () {
        return 25 + germanyDecorator.prototype.getCost();
    };
    return Beer;
}(Product));
//implementation
var strawberryYogurt = new Yogurt();
var germanyBeer = new Beer();
console.log(strawberryYogurt.getDescription());
console.log(strawberryYogurt.getCost());
console.log(germanyBeer.getDescription());
console.log(germanyBeer.getCost());
