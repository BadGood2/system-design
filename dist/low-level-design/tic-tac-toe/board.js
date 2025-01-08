"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Board {
    constructor() {
        this.movesCount = 0;
        this.initializeBoard();
    }
    initializeBoard() {
        this.board = Array.from({ length: 3 }, () => Array(3).fill('-'));
    }
    makeValidMove(row, col, symbol) {
        if (row > 3 || row < 0 || col > 3 || col < 0 || this.board[row][col] !== '-') {
            return false;
        }
        this.board[row][col] = symbol;
        this.movesCount++;
        return true;
    }
    isFull() {
        return this.movesCount === 9 ? true : false;
    }
    isWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] !== '-' && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2])
                return true;
            if (this.board[0][i] !== '-' && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i])
                return true;
        }
        // diagonals
        if (this.board[0][0] !== '-' && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2])
            return true;
        if (this.board[2][2] !== '-' && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0])
            return true;
        return false;
    }
    printBoard() {
        for (let i = 0; i < 3; i++) {
            console.log(this.board[i], '\n');
        }
    }
}
exports.default = Board;
