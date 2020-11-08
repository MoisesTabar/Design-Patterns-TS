"use strict";
exports.__esModule = true;
exports.WaterType = exports.FireType = exports.GrassType = void 0;
var GrassType = /** @class */ (function () {
    function GrassType() {
    }
    GrassType.prototype.attack = function () {
        console.log('Grass type pokemon attacking');
    };
    return GrassType;
}());
exports.GrassType = GrassType;
var FireType = /** @class */ (function () {
    function FireType() {
    }
    FireType.prototype.attack = function () {
        console.log('Fire type pokemon attacking');
    };
    return FireType;
}());
exports.FireType = FireType;
var WaterType = /** @class */ (function () {
    function WaterType() {
    }
    WaterType.prototype.attack = function () {
        console.log('Water type pokemon attacking');
    };
    return WaterType;
}());
exports.WaterType = WaterType;
