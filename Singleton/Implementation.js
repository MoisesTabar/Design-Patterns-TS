"use strict";
exports.__esModule = true;
var Bots_1 = require("./Bots");
//if we have another implementation of the Bots class, the method will override 
//and the information we entered will be renovated
function implementation() {
    Bots_1["default"].printBotCount();
    Bots_1["default"].storageBots('Bot one');
    Bots_1["default"].printBotCount();
}
exports["default"] = implementation;
