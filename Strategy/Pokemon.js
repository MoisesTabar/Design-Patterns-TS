"use strict";
exports.__esModule = true;
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, type, health, move) {
        this.name = name;
        this.type = type;
        this.move = move;
        this.health = health;
    }
    Pokemon.prototype.attackAlgorithm = function () {
        console.log(this.name + " has been choosed, its a " + this.type + " type Pokemon has " + this.health + " haatlh points");
        this.move.attack();
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
