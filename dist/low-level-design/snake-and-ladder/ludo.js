"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = __importDefault(require("./board"));
const game_1 = __importDefault(require("./game"));
const player_1 = __importDefault(require("./player"));
const board = new board_1.default();
const game = new game_1.default(board);
game.addPlayer(new player_1.default(1, 'Player 1'));
game.addPlayer(new player_1.default(2, 'Player 2'));
game.play();
