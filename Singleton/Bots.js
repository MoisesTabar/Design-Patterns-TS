"use strict";
exports.__esModule = true;
//We never want to use the class, just the single instance
var Bots = /** @class */ (function () {
    function Bots() {
        if (Bots.instance == null) {
            this.bots = [];
            Bots.instance == this;
        }
        //now instead of returning a new instance we return the same instance
        return Bots.instance;
    }
    Bots.prototype.storageBots = function (bot) {
        this.bots.push(bot);
        console.log(bot + " Storaged");
        console.log('---------------------------------');
    };
    Bots.prototype.printBotCount = function () {
        console.log("Bots storaged: " + this.bots.length);
    };
    return Bots;
}());
//so here we just create the bot instance that will always execute
var botLogger = new Bots();
//we use object.freeze to make the object unchangable
Object.freeze(botLogger);
//finally we export the botlogger instance instead of the class
exports["default"] = botLogger;
