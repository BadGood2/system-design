import readline from "readline"
import Player from "./player";
import Board from "./board";

export default class Game{
    player1: Player
    player2: Player
    board: Board
    currentPlayer: Player

    constructor(player1: Player, player2: Player){
        this.player1 = player1
        this.player2 = player2
        this.board = new Board()
        this.currentPlayer = player1
    }

    async play(){
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const getInput = (prompt: string): Promise<string> => {
            return new Promise((resolve) => rl.question(prompt, resolve));
        };
        while(!this.board.isFull()){
            this.board.printBoard()
            const input = await getInput(
                `${this.currentPlayer.name}, enter your move (row,col): `
            );
            let [row, col] = input.split(",").map(Number);

            while(!this.board.makeValidMove(row, col, this.currentPlayer.getSymbol())){
                console.log('Made a illegal move, Pls enter again')
                const input = await getInput(
                    `${this.currentPlayer.name}, enter your move (row,col): `
                );
                let [newRow, newCol] = input.split(",").map(Number);
                row = newRow
                col = newCol
            }
            if(this.board.isWinner()){
                console.log(`${this.currentPlayer.name} wins`)
                rl.close()
                break
            }
            this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1
        }
    }
}