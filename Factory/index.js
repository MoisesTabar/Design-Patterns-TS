/*
*We need the manufacturer abstract class or interface that returns
*an object of a Console class
*/
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
var Manufacturer = /** @class */ (function () {
    function Manufacturer() {
    }
    Manufacturer.prototype.defineManufacturer = function () {
        var console = this.produceConsoles();
        return console.operation();
    };
    return Manufacturer;
}());
/*
* now we have concrete manufacturers that override the produceConsoles method
*/
var SonyManufacturer = /** @class */ (function (_super) {
    __extends(SonyManufacturer, _super);
    function SonyManufacturer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SonyManufacturer.prototype.produceConsoles = function () {
        return new PlaystationConsole();
    };
    return SonyManufacturer;
}(Manufacturer));
var MicrosoftManufacturer = /** @class */ (function (_super) {
    __extends(MicrosoftManufacturer, _super);
    function MicrosoftManufacturer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MicrosoftManufacturer.prototype.produceConsoles = function () {
        return new XboxConsole();
    };
    return MicrosoftManufacturer;
}(Manufacturer));
/*
* now we have the console abstract class
*/
var NewConsole = /** @class */ (function () {
    function NewConsole() {
    }
    return NewConsole;
}());
/*
* A concrete console produces various implementation of the Console abstract class
*/
var PlaystationConsole = /** @class */ (function (_super) {
    __extends(PlaystationConsole, _super);
    function PlaystationConsole() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.console = {
            name: 'Playstation4',
            processor: 'AMD “Jaguar”, 8 cores GPU : 1.84 TFLOPS, AMD Radeon™ based graphics engine',
            colors: ['Black', 'Chrome Black'],
            storage: 500
        };
        return _this;
    }
    PlaystationConsole.prototype.operation = function () {
        return this.console;
    };
    return PlaystationConsole;
}(NewConsole));
var XboxConsole = /** @class */ (function (_super) {
    __extends(XboxConsole, _super);
    function XboxConsole() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.console = {
            name: 'XboxOne',
            processor: 'AMD-customized Jaguar Evolved',
            colors: ['White', 'White-Green'],
            storage: 500
        };
        return _this;
    }
    XboxConsole.prototype.operation = function () {
        return this.console;
    };
    return XboxConsole;
}(NewConsole));
/*
* Client code
*/
var clientCode = function (manufacturer) {
    console.log(manufacturer.defineManufacturer());
};
//here we are just using the new operator to call a manufacturer that creates a new console
clientCode(new SonyManufacturer);
clientCode(new MicrosoftManufacturer);
