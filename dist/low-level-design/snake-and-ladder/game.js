"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor(board) {
        this.players = [];
        this.board = board;
    }
    addPlayer(player) {
        this.players.push(player);
    }
    play() {
        while (1) {
            this.currentPlayer = this.players.pop();
            let diceRoll = this.rollDice();
            console.log(`${this.currentPlayer.name} rolled a dice with value ${diceRoll}`);
            if (this.currentPlayer.getPosition() + diceRoll <= 100) {
                this.currentPlayer.setPosition(this.board.getPositionAfterJump(this.currentPlayer.getPosition() + diceRoll));
                if (this.currentPlayer.getPosition() === 100) {
                    console.log(`${this.currentPlayer.name} wins`);
                    break;
                }
            }
            this.players.unshift(this.currentPlayer);
        }
    }
    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }
}
exports.default = Game;
