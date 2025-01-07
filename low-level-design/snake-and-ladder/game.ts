import Board from "./board";
import Player from "./player";

export default class Game {
    board: Board;
    currentPlayer: Player | undefined;
    players:Player[] = [];

    constructor(board: Board) {
        this.board = board;
    }

    addPlayer(player: Player): void {
        this.players.push(player)
    }

    play(): void {
        while(1){
            this.currentPlayer = this.players.pop() as Player
            let diceRoll = this.rollDice()

            console.log(`${this.currentPlayer.name} rolled a dice with value ${diceRoll}`);

            if(this.currentPlayer.getPosition() + diceRoll <= 100){
                this.currentPlayer.setPosition(this.board.getPositionAfterJump(this.currentPlayer.getPosition() + diceRoll))

                if(this.currentPlayer.getPosition() === 100){
                console.log(`${this.currentPlayer.name} wins`);
                break
            }

            }
            
            this.players.unshift(this.currentPlayer)
        }
    }

    

    rollDice(): number {
        return Math.floor(Math.random() * 6) + 1;
    }
}
