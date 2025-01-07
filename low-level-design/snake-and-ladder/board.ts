import Snake from "./snake"
import Ladder from "./ladder"

export default class Board{
   snakes: Snake[] = []
   ladders: Ladder[] = []

    constructor(){
        this.initializeSnakesAndLadders()
    } 

    initializeSnakesAndLadders(){
        this.snakes.push(new Snake(94, 26))
        this.snakes.push(new Snake(62, 33))
        this.snakes.push(new Snake(28, 2))

        this.ladders.push(new Ladder(18, 56))
        this.ladders.push(new Ladder(50, 88))
        this.ladders.push(new Ladder(59, 97))
    }

    getPositionAfterJump(position: number){
        for(let i = 0;i<this.snakes.length;i++){
            if(this.snakes[i].head === position){
                return this.snakes[i].tail
            }
        }

        for(let i = 0;i<this.ladders.length;i++){
            if(this.snakes[i].head === position){
                return this.snakes[i].tail
            }
        }
        return position
    }
}