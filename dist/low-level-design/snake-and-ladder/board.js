"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snake_1 = __importDefault(require("./snake"));
const ladder_1 = __importDefault(require("./ladder"));
class Board {
    constructor() {
        this.snakes = [];
        this.ladders = [];
        this.initializeSnakesAndLadders();
    }
    initializeSnakesAndLadders() {
        this.snakes.push(new snake_1.default(94, 26));
        this.snakes.push(new snake_1.default(62, 33));
        this.snakes.push(new snake_1.default(28, 2));
        this.ladders.push(new ladder_1.default(18, 56));
        this.ladders.push(new ladder_1.default(50, 88));
        this.ladders.push(new ladder_1.default(59, 97));
    }
    getPositionAfterJump(position) {
        for (let i = 0; i < this.snakes.length; i++) {
            if (this.snakes[i].head === position) {
                return this.snakes[i].tail;
            }
        }
        for (let i = 0; i < this.ladders.length; i++) {
            if (this.snakes[i].head === position) {
                return this.snakes[i].tail;
            }
        }
        return position;
    }
}
exports.default = Board;
