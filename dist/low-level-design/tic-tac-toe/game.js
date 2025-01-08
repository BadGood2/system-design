"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const board_1 = __importDefault(require("./board"));
class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = new board_1.default();
        this.currentPlayer = player1;
    }
    play() {
        return __awaiter(this, void 0, void 0, function* () {
            const rl = readline_1.default.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            const getInput = (prompt) => {
                return new Promise((resolve) => rl.question(prompt, resolve));
            };
            while (!this.board.isFull()) {
                this.board.printBoard();
                const input = yield getInput(`${this.currentPlayer.name}, enter your move (row,col): `);
                let [row, col] = input.split(",").map(Number);
                while (!this.board.makeValidMove(row, col, this.currentPlayer.getSymbol())) {
                    console.log('Made a illegal move, Pls enter again');
                    const input = yield getInput(`${this.currentPlayer.name}, enter your move (row,col): `);
                    let [newRow, newCol] = input.split(",").map(Number);
                    row = newRow;
                    col = newCol;
                }
                if (this.board.isWinner()) {
                    console.log(`${this.currentPlayer.name} wins`);
                    rl.close();
                    break;
                }
                this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
            }
        });
    }
}
exports.default = Game;
