"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }
    getName() {
        return this.name;
    }
    getSymbol() {
        return this.symbol;
    }
}
exports.default = Player;
