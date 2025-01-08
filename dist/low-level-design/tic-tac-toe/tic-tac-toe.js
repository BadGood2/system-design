"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = __importDefault(require("./game"));
const player_1 = __importDefault(require("./player"));
const game = new game_1.default(new player_1.default('player1', 'X'), new player_1.default('player2', 'O'));
game.play();
